import { Routes } from '@angular/router';
import { NewCheckComponent } from './new-check/new-check.component';
import { checksAddGuard, checksEditGuard } from './checks.guard';

export const ChecksRoutes: Routes = [
  {
    path: 'new',
    component: NewCheckComponent,
    canActivate: [checksAddGuard],
  },
  {
    path: 'edit/:id',
    component: NewCheckComponent,
    canActivate: [checksEditGuard],
  },
];
