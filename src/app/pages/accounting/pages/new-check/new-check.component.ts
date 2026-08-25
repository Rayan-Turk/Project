import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ChecksService } from '../checks.service';

@Component({
  selector: 'app-new-check',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-check.component.html',
  styleUrl: './new-check.component.scss',
})
export class NewCheckComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private checksService = inject(ChecksService);

  isEditing = false;
  editingId = 0;

  form = new FormGroup({
    docRefrence: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    docDate: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    amount: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
    beneficent_InvNumb: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    tranTypeID: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    remarks: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      this.isEditing = true;
      this.editingId = Number(idParam);

      const existingCheck = this.checksService
        .checks()
        .find((c) => c.tranID === this.editingId);

      if (existingCheck) {
        this.form.patchValue({
          docRefrence: existingCheck.docRefrence,
          docDate: existingCheck.docDate?.slice(0, 10) ?? '',
          amount: existingCheck.amount,
          beneficent_InvNumb: existingCheck.beneficent_InvNumb,
          tranTypeID: existingCheck.tranTypeID,
          description: existingCheck.description,
          remarks: existingCheck.remarks,
        });
      }
    }
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const raw = this.form.getRawValue();

    const payload = {
      docRefrence: raw.docRefrence,
      docDate: new Date(raw.docDate).toISOString(),
      amount: raw.amount!,
      beneficent_InvNumb: raw.beneficent_InvNumb,
      tranTypeID: raw.tranTypeID!,
      description: raw.description,
      remarks: raw.remarks,
    };

    if (this.isEditing) {
      this.checksService.updateCheck(this.editingId, payload);
      this.router.navigate(['accounting/checks']);
    } else {
      this.checksService.addCheck(payload).subscribe({
        next: () => {
          this.checksService.fetchChecks();
          this.router.navigate(['accounting/checks']);
        },
        error: (err) => console.error('Failed to add check', err),
      });
    }
  }

  onClose(): void {
    this.router.navigate(['accounting/checks']);
  }
}
