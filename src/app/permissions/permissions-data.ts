import { PermissionDefinition } from './permission.model';

export const ALL_PERMISSIONS: PermissionDefinition[] = [
  { id: 1, action: 'Read', moduleName: 'Locations' },

  { id: 100, action: 'Read', moduleName: 'Accounting' },
  { id: 101, action: 'Add', moduleName: 'Accounting' },
  { id: 102, action: 'Edit', moduleName: 'Accounting' },
  { id: 103, action: 'Delete', moduleName: 'Accounting' },

  { id: 110, action: 'Read', moduleName: 'Lookup' },
  { id: 111, action: 'Add', moduleName: 'Lookup' },
  { id: 112, action: 'Edit', moduleName: 'Lookup' },
  { id: 113, action: 'Delete', moduleName: 'Lookup' },

  { id: 120, action: 'Read', moduleName: 'HR Master' },
  { id: 121, action: 'Add', moduleName: 'HR Master' },
  { id: 122, action: 'Edit', moduleName: 'HR Master' },
  { id: 123, action: 'Delete', moduleName: 'HR Master' },

  { id: 130, action: 'Read', moduleName: 'HR Details' },
  { id: 131, action: 'Add', moduleName: 'HR Details' },
  { id: 132, action: 'Edit', moduleName: 'HR Details' },
  { id: 133, action: 'Delete', moduleName: 'HR Details' },

  { id: 140, action: 'Read', moduleName: 'HR Generalization' },
  { id: 141, action: 'Add', moduleName: 'HR Generalization' },
  { id: 142, action: 'Edit', moduleName: 'HR Generalization' },
  { id: 143, action: 'Delete', moduleName: 'HR Generalization' },

  { id: 150, action: 'Read', moduleName: 'Invest Investors' },
  { id: 151, action: 'Add', moduleName: 'Invest Investors' },
  { id: 152, action: 'Edit', moduleName: 'Invest Investors' },
  { id: 153, action: 'Delete', moduleName: 'Invest Investors' },

  { id: 160, action: 'Read', moduleName: 'Invest Contract Master' },
  { id: 161, action: 'Add', moduleName: 'Invest Contract Master' },
  { id: 162, action: 'Edit', moduleName: 'Invest Contract Master' },
  { id: 163, action: 'Delete', moduleName: 'Invest Contract Master' },

  { id: 170, action: 'Read', moduleName: 'Invest Contract Details' },
  { id: 171, action: 'Add', moduleName: 'Invest Contract Details' },
  { id: 172, action: 'Edit', moduleName: 'Invest Contract Details' },
  { id: 173, action: 'Delete', moduleName: 'Invest Contract Details' },

  { id: 180, action: 'Read', moduleName: 'Legal Issue Master' },
  { id: 181, action: 'Add', moduleName: 'Legal Issue Master' },
  { id: 182, action: 'Edit', moduleName: 'Legal Issue Master' },
  { id: 183, action: 'Delete', moduleName: 'Legal Issue Master' },

  { id: 190, action: 'Read', moduleName: 'Legal Investigation' },
  { id: 191, action: 'Add', moduleName: 'Legal Investigation' },
  { id: 192, action: 'Edit', moduleName: 'Legal Investigation' },
  { id: 193, action: 'Delete', moduleName: 'Legal Investigation' },

  { id: 200, action: 'Read', moduleName: 'Legal Issue Details' },
  { id: 201, action: 'Add', moduleName: 'Legal Issue Details' },
  { id: 202, action: 'Edit', moduleName: 'Legal Issue Details' },
  { id: 203, action: 'Delete', moduleName: 'Legal Issue Details' },

  { id: 210, action: 'Read', moduleName: 'Purchase PO Master' },
  { id: 211, action: 'Add', moduleName: 'Purchase PO Master' },
  { id: 212, action: 'Edit', moduleName: 'Purchase PO Master' },
  { id: 213, action: 'Delete', moduleName: 'Purchase PO Master' },

  { id: 220, action: 'Read', moduleName: 'Purchase PO Details' },
  { id: 221, action: 'Add', moduleName: 'Purchase PO Details' },
  { id: 222, action: 'Edit', moduleName: 'Purchase PO Details' },
  { id: 223, action: 'Delete', moduleName: 'Purchase PO Details' },

  { id: 230, action: 'Read', moduleName: 'Purchase Supplier Master' },
  { id: 231, action: 'Add', moduleName: 'Purchase Supplier Master' },
  { id: 232, action: 'Edit', moduleName: 'Purchase Supplier Master' },
  { id: 233, action: 'Delete', moduleName: 'Purchase Supplier Master' },

  { id: 240, action: 'Read', moduleName: 'Purchase Supplier Detail' },
  { id: 241, action: 'Add', moduleName: 'Purchase Supplier Detail' },
  { id: 242, action: 'Edit', moduleName: 'Purchase Supplier Detail' },
  { id: 243, action: 'Delete', moduleName: 'Purchase Supplier Detail' },

  { id: 250, action: 'Read', moduleName: 'Purchase Festival Master' },
  { id: 251, action: 'Add', moduleName: 'Purchase Festival Master' },
  { id: 252, action: 'Edit', moduleName: 'Purchase Festival Master' },
  { id: 253, action: 'Delete', moduleName: 'Purchase Festival Master' },

  { id: 260, action: 'Read', moduleName: 'Purchase Festival Detail' },
  { id: 261, action: 'Add', moduleName: 'Purchase Festival Detail' },
  { id: 262, action: 'Edit', moduleName: 'Purchase Festival Detail' },
  { id: 263, action: 'Delete', moduleName: 'Purchase Festival Detail' },

  { id: 270, action: 'Read', moduleName: 'Purchase Shelf Contracts' },
  { id: 271, action: 'Add', moduleName: 'Purchase Shelf Contracts' },
  { id: 272, action: 'Edit', moduleName: 'Purchase Shelf Contracts' },
  { id: 273, action: 'Delete', moduleName: 'Purchase Shelf Contracts' },

  { id: 280, action: 'Read', moduleName: 'Purchase Registry' },
  { id: 281, action: 'Add', moduleName: 'Purchase Registry' },
  { id: 282, action: 'Edit', moduleName: 'Purchase Registry' },
  { id: 283, action: 'Delete', moduleName: 'Purchase Registry' },

  { id: 290, action: 'Read', moduleName: 'Purchase Price Generalization' },
  { id: 291, action: 'Add', moduleName: 'Purchase Price Generalization' },
  { id: 292, action: 'Edit', moduleName: 'Purchase Price Generalization' },
  { id: 293, action: 'Delete', moduleName: 'Purchase Price Generalization' },

  { id: 300, action: 'Read', moduleName: 'Sadder Wareed Location' },
  { id: 301, action: 'Add', moduleName: 'Sadder Wareed Location' },
  { id: 302, action: 'Edit', moduleName: 'Sadder Wareed Location' },
  { id: 303, action: 'Delete', moduleName: 'Sadder Wareed Location' },

  { id: 310, action: 'Read', moduleName: 'Sadder Wareed Master' },
  { id: 311, action: 'Add', moduleName: 'Sadder Wareed Master' },
  { id: 312, action: 'Edit', moduleName: 'Sadder Wareed Master' },
  { id: 313, action: 'Delete', moduleName: 'Sadder Wareed Master' },

  { id: 320, action: 'Read', moduleName: 'Sadder Wareed Detail' },
  { id: 321, action: 'Add', moduleName: 'Sadder Wareed Detail' },
  { id: 322, action: 'Edit', moduleName: 'Sadder Wareed Detail' },
  { id: 323, action: 'Delete', moduleName: 'Sadder Wareed Detail' },

  { id: 330, action: 'Read', moduleName: 'Shareholders Master' },
  { id: 331, action: 'Add', moduleName: 'Shareholders Master' },
  { id: 332, action: 'Edit', moduleName: 'Shareholders Master' },
  { id: 333, action: 'Delete', moduleName: 'Shareholders Master' },

  { id: 340, action: 'Read', moduleName: 'Shareholders Details' },
  { id: 341, action: 'Add', moduleName: 'Shareholders Details' },
  { id: 342, action: 'Edit', moduleName: 'Shareholders Details' },
  { id: 343, action: 'Delete', moduleName: 'Shareholders Details' },

  { id: 350, action: 'Read', moduleName: 'Relation Activity' },
  { id: 351, action: 'Add', moduleName: 'Relation Activity' },
  { id: 352, action: 'Edit', moduleName: 'Relation Activity' },
  { id: 353, action: 'Delete', moduleName: 'Relation Activity' },

  { id: 360, action: 'Read', moduleName: 'Contract Company' },
  { id: 361, action: 'Add', moduleName: 'Contract Company' },
  { id: 362, action: 'Edit', moduleName: 'Contract Company' },
  { id: 363, action: 'Delete', moduleName: 'Contract Company' },

  { id: 370, action: 'Read', moduleName: 'Contract Master' },
  { id: 371, action: 'Add', moduleName: 'Contract Master' },
  { id: 372, action: 'Edit', moduleName: 'Contract Master' },
  { id: 373, action: 'Delete', moduleName: 'Contract Master' },

  { id: 380, action: 'Read', moduleName: 'Contract Payment' },
  { id: 381, action: 'Add', moduleName: 'Contract Payment' },
  { id: 382, action: 'Edit', moduleName: 'Contract Payment' },
  { id: 383, action: 'Delete', moduleName: 'Contract Payment' },

  { id: 390, action: 'Read', moduleName: 'Contract PO Details' },
  { id: 391, action: 'Add', moduleName: 'Contract PO Details' },
  { id: 392, action: 'Edit', moduleName: 'Contract PO Details' },
  { id: 393, action: 'Delete', moduleName: 'Contract PO Details' },

  { id: 400, action: 'Read', moduleName: 'Contract PO Master' },
  { id: 401, action: 'Add', moduleName: 'Contract PO Master' },
  { id: 402, action: 'Edit', moduleName: 'Contract PO Master' },
  { id: 403, action: 'Delete', moduleName: 'Contract PO Master' },

  { id: 410, action: 'Read', moduleName: 'Contract Service Location' },
  { id: 411, action: 'Add', moduleName: 'Contract Service Location' },
  { id: 412, action: 'Edit', moduleName: 'Contract Service Location' },
  { id: 413, action: 'Delete', moduleName: 'Contract Service Location' },

  { id: 420, action: 'Read', moduleName: 'Contract Location Lookup' },
  { id: 421, action: 'Add', moduleName: 'Contract Location Lookup' },
  { id: 422, action: 'Edit', moduleName: 'Contract Location Lookup' },
  { id: 423, action: 'Delete', moduleName: 'Contract Location Lookup' },

  { id: 424, action: 'Read', moduleName: 'Secretary Master' },
  { id: 425, action: 'Add', moduleName: 'Secretary Master' },
  { id: 426, action: 'Edit', moduleName: 'Secretary Master' },
  { id: 427, action: 'Delete', moduleName: 'Secretary Master' },

  { id: 428, action: 'Read', moduleName: 'Secretary Details' },
  { id: 429, action: 'Add', moduleName: 'Secretary Details' },
  { id: 430, action: 'Edit', moduleName: 'Secretary Details' },
  { id: 431, action: 'Delete', moduleName: 'Secretary Details' },

  { id: 432, action: 'Read', moduleName: 'Relations PO Master' },
  { id: 433, action: 'Add', moduleName: 'Relations PO Master' },
  { id: 434, action: 'Edit', moduleName: 'Relations PO Master' },
  { id: 435, action: 'Delete', moduleName: 'Relations PO Master' },

  { id: 436, action: 'Read', moduleName: 'Relations PO Details' },
  { id: 437, action: 'Add', moduleName: 'Relations PO Details' },
  { id: 438, action: 'Edit', moduleName: 'Relations PO Details' },
  { id: 439, action: 'Delete', moduleName: 'Relations PO Details' },

  { id: 440, action: 'Read', moduleName: 'Relation Invoices' },
  { id: 441, action: 'Add', moduleName: 'Relation Invoices' },
  { id: 442, action: 'Edit', moduleName: 'Relation Invoices' },
  { id: 443, action: 'Delete', moduleName: 'Relation Invoices' },

  { id: 444, action: 'Read', moduleName: 'Purchase Company' },
  { id: 445, action: 'Add', moduleName: 'Purchase Company' },
  { id: 446, action: 'Edit', moduleName: 'Purchase Company' },
  { id: 447, action: 'Delete', moduleName: 'Purchase Company' },

  { id: 469, action: 'Read', moduleName: 'Lookup Category' },
  { id: 470, action: 'Add', moduleName: 'Lookup Category' },
  { id: 471, action: 'Edit', moduleName: 'Lookup Category' },
  { id: 472, action: 'Delete', moduleName: 'Lookup Category' },
];
