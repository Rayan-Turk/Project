import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../users.model';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [CommonModule, RouterLink, ConfirmDialogComponent],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss',
})
export class UserItemComponent {
  user = input.required<User>();
  delete = output<string>();

  showConfirm = signal(false);

  onDeleteClick(): void {
    this.showConfirm.set(true);
  }

  onConfirmDelete(): void {
    this.delete.emit(this.user().id);
    this.showConfirm.set(false);
  }

  onCancelDelete(): void {
    this.showConfirm.set(false);
  }
}
