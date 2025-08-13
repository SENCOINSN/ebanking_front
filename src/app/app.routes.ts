import { Routes } from '@angular/router';

import {
  AccountCreation,
} from './components/account-creation/account-creation';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { authGuard } from './guard/auth-guard';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path:'login',
    component:Login
  },
  {
    path:'dashboard',
    component: Layout,
    children: [
        {
            path:'',
            component:Home
        },
        {
            path:'account-creation',
            component:AccountCreation
        }
    ],
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];
