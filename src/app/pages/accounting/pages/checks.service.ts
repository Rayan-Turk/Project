import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Check } from './check.model';

interface CheckInput {
  docRefrence: string;
  docDate: string;
  amount: number;
  beneficent_InvNumb: string;
  tranTypeID: number;
  description: string;
  remarks: string;
}

@Injectable({ providedIn: 'root' })
export class ChecksService {
  private httpClient = inject(HttpClient);
  private baseUrl =
    'https://ibrprojects.ibrgc.com/archiveapi/api/AccountingData';

  checks = signal<Check[]>([]);

  fetchChecks() {
    this.httpClient
      .get<
        Check[]
      >(this.baseUrl + '/GetAccountingDataByType', { params: { doctype: 'CHECK' } })
      .subscribe({
        next: (response) => this.checks.set(response),
        error: (err) => console.error('Failed to fetch checks', err),
      });
  }

  addCheck(check: CheckInput) {
    const now = new Date().toISOString();
    const formData = new FormData();

    formData.append('TranID', '0');
    formData.append('DocType', 'CHECK');
    formData.append('DocRefrence', check.docRefrence);
    formData.append('DocDate', check.docDate);
    formData.append('Amount', String(check.amount));
    formData.append('Remarks', check.remarks);
    formData.append('FilePath', 'Path');
    formData.append('beneficent_InvNumb', check.beneficent_InvNumb);
    formData.append('TranTypeID', String(check.tranTypeID));
    formData.append('Description', check.description);
    formData.append('CreateBy', 'Name');
    formData.append('CreateDate', now);
    formData.append('UpdateBy', 'Name');
    formData.append('UpdateDate', now);
    formData.append('FileUpload', '');

    return this.httpClient.post(this.baseUrl, formData);
  }

  deleteCheck(tranID: number) {
    return this.httpClient.delete(`${this.baseUrl}/${tranID}`).subscribe({
      next: () => {
        this.fetchChecks();
      },
      error: (err) => console.error('Failed to delete check', err),
    });
  }

  updateCheck(tranID: number, check: CheckInput) {
    const now = new Date().toISOString();
    const formData = new FormData();

    formData.append('TranID', String(tranID));
    formData.append('DocType', 'CHECK');
    formData.append('DocRefrence', check.docRefrence);
    formData.append('DocDate', check.docDate);
    formData.append('Amount', String(check.amount));
    formData.append('Remarks', check.remarks);
    formData.append('FilePath', 'Path');
    formData.append('beneficent_InvNumb', check.beneficent_InvNumb);
    formData.append('TranTypeID', String(check.tranTypeID));
    formData.append('Description', check.description);
    formData.append('CreateBy', 'Name');
    formData.append('CreateDate', now);
    formData.append('UpdateBy', 'Name');
    formData.append('UpdateDate', now);
    formData.append('FileUpload', '');

    return this.httpClient
      .put(`${this.baseUrl}/${tranID}`, formData)
      .subscribe({
        next: () => {
          this.fetchChecks();
        },
        error: (err) => console.error('Failed to update check', err),
      });
  }
}
