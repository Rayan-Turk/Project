import { Routes } from '@angular/router';
import { NewRoleComponent } from './new-role/new-role.component';

export const RolesRoutes: Routes = [
  {
    path: 'new',
    component: NewRoleComponent,
  },
  {
    path: 'edit/:name',
    component: NewRoleComponent,
  },
];
