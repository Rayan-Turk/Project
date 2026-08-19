import { Routes } from '@angular/router';
import { NewUserComponent } from './new-user/new-user.component';

export const UsersRoutes: Routes = [
  {
    path: 'new',
    component: NewUserComponent,
  },
  {
    path: 'edit/:id',
    component: NewUserComponent,
  },
];
