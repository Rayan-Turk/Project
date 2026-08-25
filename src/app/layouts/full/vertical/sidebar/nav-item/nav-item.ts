export interface NavItem {
  displayName?: string;
  disabled?: boolean;
  external?: boolean;
  twoLines?: boolean;
  chip?: boolean;
  iconName?: string;
  navCap?: string;
  chipContent?: string;
  chipClass?: string;
  subtext?: string;
  route?: string;
  children?: NavItem[];
  ddType?: string;
  superAdminOnly?: boolean;
  requiredPermission?: {
    moduleName: string;
    action: 'Read' | 'Add' | 'Edit' | 'Delete';
  };
}
