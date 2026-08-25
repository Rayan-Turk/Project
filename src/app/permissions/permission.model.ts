export interface PermissionDefinition {
  id: number;
  action: 'Read' | 'Add' | 'Edit' | 'Delete';
  moduleName: string;
}
