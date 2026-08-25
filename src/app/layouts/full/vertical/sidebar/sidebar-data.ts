import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Login',
    iconName: 'solar:home-angle-line-duotone',
    route: 'login',
  },
  {
    displayName: 'Settings',
    iconName: 'solar:home-angle-line-duotone',
    route: 'settings',
    children: [
      {
        displayName: 'users',
        iconName: 'solar:home-angle-line-duotone',
        route: 'settings/users',
      },
    ],
  },
  {
    displayName: 'Starter',
    iconName: 'solar:home-angle-line-duotone',
    route: 'starter',
  },
  {
    displayName: 'Roles',
    iconName: 'solar:home-angle-line-duotone',
    route: 'roles',
    superAdminOnly: true,
  },
  {
    displayName: 'Users',
    iconName: 'solar:home-angle-line-duotone',
    route: 'users',
    superAdminOnly: true,
  },
  {
    displayName: 'Accounting',
    iconName: 'solar:home-angle-line-duotone',
    route: 'accounting',
    requiredPermission: { moduleName: 'Accounting', action: 'Read' },
    children: [
      {
        displayName: 'Checks',
        iconName: 'solar:home-angle-line-duotone',
        route: 'accounting/checks',
      },
    ],
  },
];
