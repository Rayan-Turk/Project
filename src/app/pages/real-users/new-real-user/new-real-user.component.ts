import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RealUsersService } from '../real-users.service';
import { RolesService } from '../../roles/roles.service';

@Component({
  selector: 'app-new-real-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-real-user.component.html',
  styleUrl: './new-real-user.component.scss',
})
export class NewRealUserComponent implements OnInit {
  private router = inject(Router);
  private realUsersService = inject(RealUsersService);
  private rolesService = inject(RolesService);

  roles = this.rolesService.roles;

  form = new FormGroup({
    userName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    roleName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  ngOnInit(): void {
    this.rolesService.fetchRoles();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.realUsersService.registerUser(this.form.getRawValue()).subscribe({
      next: () => {
        this.realUsersService.fetchUsers();
        this.router.navigate(['users']);
      },
      error: (err) => console.error('Failed to register user', err),
    });
  }

  onClose(): void {
    this.router.navigate(['users']);
  }
}
