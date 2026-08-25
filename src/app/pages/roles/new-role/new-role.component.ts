import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RolesService } from '../roles.service';
import { ALL_PERMISSIONS } from 'src/app/permissions/permissions-data';

@Component({
  selector: 'app-new-role',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-role.component.html',
  styleUrl: './new-role.component.scss',
})
export class NewRoleComponent implements OnInit {
  private location = inject(Location);
  private rolesService = inject(RolesService);
  private route = inject(ActivatedRoute);

  allPermissions = ALL_PERMISSIONS;
  selectedPermissions = new Set<string>();

  isEditing = false;
  roleId = 0;

  form = new FormGroup({
    roleName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  ngOnInit(): void {
    const nameParam = this.route.snapshot.paramMap.get('name');

    if (nameParam) {
      this.isEditing = true;

      const matchingRole = this.rolesService
        .roles()
        .find((r) => r.normalizedName === nameParam);
      this.roleId = matchingRole ? matchingRole.id : 0;
      this.form.patchValue({
        roleName: matchingRole ? matchingRole.name : nameParam,
      });

      this.rolesService.getRolePermissions(nameParam).subscribe({
        next: (permissions) => {
          this.selectedPermissions = new Set(permissions);
        },
        error: (err) => console.error('Failed to load role permissions', err),
      });
    }
  }

  togglePermission(permissionId: number, checked: boolean): void {
    const idStr = String(permissionId);
    if (checked) {
      this.selectedPermissions.add(idStr);
    } else {
      this.selectedPermissions.delete(idStr);
    }
  }

  isChecked(permissionId: number): boolean {
    return this.selectedPermissions.has(String(permissionId));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      roleId: this.roleId,
      roleName: this.form.getRawValue().roleName,
      permissionsEnums: Array.from(this.selectedPermissions).map(Number),
    };

    this.rolesService.saveRolePermissions(payload).subscribe({
      next: () => this.location.back(),
      error: (err) => console.error('Failed to save role', err),
    });
  }

  onClose(): void {
    this.location.back();
  }
}
