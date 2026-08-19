import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss',
})
export class NewUserComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UsersService);
  private route = inject(ActivatedRoute);

  editingId: string | null = null;

  form = new FormGroup({
    username: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    fullName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    phoneNumber: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  ngOnInit(): void {
    this.editingId = this.route.snapshot.paramMap.get('id');

    if (this.editingId) {
      const existingUser = this.userService
        .users()
        .find((u) => u.id === this.editingId);

      if (existingUser) {
        this.form.patchValue(existingUser);
      }
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.editingId) {
      this.userService.updateUser(this.editingId, this.form.getRawValue());
    } else {
      this.userService.addUser(this.form.getRawValue());
    }

    this.router.navigate(['/settings/users'], { replaceUrl: true });
  }

  onClose(): void {
    this.router.navigate(['/settings/users'], { replaceUrl: true });
  }
}
