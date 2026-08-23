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
    displayName: 'Starter',
    iconName: 'solar:home-angle-line-duotone',
    route: 'starter',
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
    displayName: 'Roles',
    iconName: 'solar:home-angle-line-duotone',
    route: 'roles',
  },
  {
    displayName: 'Users',
    iconName: 'solar:home-angle-line-duotone',
    route: 'users',
  },
];
