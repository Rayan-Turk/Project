import { Component, input, output, signal } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Check } from '../check.model';
import { ConfirmDialogComponent } from 'src/app/pages/settings/pages/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-check-item',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, RouterLink, ConfirmDialogComponent],
  templateUrl: './check-item.component.html',
  styleUrl: './check-item.component.scss',
})
export class CheckItemComponent {
  check = input.required<Check>();
  canEdit = input<boolean>(false);
  canDelete = input<boolean>(false);
  delete = output<number>();

  showConfirm = signal(false);

  onDeleteClick(): void {
    this.showConfirm.set(true);
  }

  onConfirmDelete(): void {
    this.delete.emit(this.check().tranID);
    this.showConfirm.set(false);
  }

  onCancelDelete(): void {
    this.showConfirm.set(false);
  }
}
