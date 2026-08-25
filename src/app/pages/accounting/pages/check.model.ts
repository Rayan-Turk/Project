export interface Check {
  tranID: number;
  docType: string;
  docRefrence: string;
  docDate: string | null;
  amount: number;
  remarks: string;
  filePath: string;
  beneficent_InvNumb: string;
  tranTypeID: number;
  description: string;
  createBy: string;
  createDate: string;
  updateBy: string;
  updateDate: string;
}
