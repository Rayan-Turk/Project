import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { SettingsComponent } from './settings/settings.component';
import { RolesComponent } from './roles/roles/roles.component';
import { RealUsersComponent } from './real-users/real-users/real-users.component';
import { superAdminGuard } from './not-authorized/role.guard';
import { AccountingComponent } from './accounting/accounting.component';

export const PagesRoutes: Routes = [
  {
    path: 'starter',
    component: StarterComponent,
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Starter Page' },
      ],
    },
  },
  {
    path: 'roles',
    component: RolesComponent,
    canActivate: [superAdminGuard],
    data: {
      title: 'Roles Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Roles Page' },
      ],
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/roles/roles.routes').then((m) => m.RolesRoutes),
      },
    ],
  },
  {
    path: 'users',
    component: RealUsersComponent,
    canActivate: [superAdminGuard],

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
          import('../pages/real-users/real-users.routes').then(
            (m) => m.RealUsersRoutes,
          ),
      },
    ],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Settings Page' },
      ],
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/settings/settings.routes').then(
            (m) => m.SettingsRoutes,
          ),
      },
    ],
  },
  {
    path: 'accounting',
    component: AccountingComponent,
    data: {
      title: 'Accounting Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Accounting Page' },
      ],
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/accounting/accounting.routes').then(
            (m) => m.AccoutingsRoutes,
          ),
      },
    ],
  },
];
