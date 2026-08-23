import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { SettingsComponent } from './settings/settings.component';
import { RolesComponent } from './roles/roles/roles.component';

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
];
