import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { SettingsComponent } from './settings/settings.component';

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
