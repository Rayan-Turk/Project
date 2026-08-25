import { Routes } from '@angular/router';
import { ChecksComponent } from './pages/checks/checks.component';
import { checksViewGuard } from './pages/checks.guard';

export const AccoutingsRoutes: Routes = [
  {
    path: 'checks',
    component: ChecksComponent,
    data: {
      title: 'Checks Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'checks Page' },
      ],
    },
    children: [
      {
        path: '',
        canActivate: [checksViewGuard],

        loadChildren: () =>
          import('../accounting/pages/checks.routes').then(
            (m) => m.ChecksRoutes,
          ),
      },
    ],
  },
];
