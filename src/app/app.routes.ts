import { Routes } from '@angular/router';

import {
  AccountCreation,
} from './components/account-creation/account-creation';
import { Home } from './components/home/home';
import { Layout } from './layout/layout';

export const routes: Routes = [
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
    ]

  }
];
