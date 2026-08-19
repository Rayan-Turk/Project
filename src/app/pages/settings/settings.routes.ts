import { Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';

export const SettingsRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'Users Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Users Page' },
      ],
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../settings/pages/users.routes').then((m) => m.UsersRoutes),
      },
    ],
  },
];
