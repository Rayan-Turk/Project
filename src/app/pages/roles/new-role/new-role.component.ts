import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RolesService } from '../roles.service';
import { ALL_PERMISSIONS } from '../role.model';

@Component({
  selector: 'app-new-role',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-role.component.html',
  styleUrl: './new-role.component.scss',
})
export class NewRoleComponent implements OnInit {
  private router = inject(Router);
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

  togglePermission(permission: string, checked: boolean): void {
    if (checked) {
      this.selectedPermissions.add(permission);
    } else {
      this.selectedPermissions.delete(permission);
    }
  }

  isChecked(permission: string): boolean {
    return this.selectedPermissions.has(permission);
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
      next: () => {
        this.rolesService.fetchRoles(); // refresh the list too, since the new role won't show otherwise
        this.router.navigate(['roles']); // adjust to your actual roles list path
      },
      error: (err) => console.error('Failed to save role', err),
    });
  }

  onClose(): void {
    this.router.navigate(['roles']); // same path
  }
}
