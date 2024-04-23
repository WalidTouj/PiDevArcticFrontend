import { Route } from '@angular/router';

import { Page404Component } from 'app/authentication/page404/page404.component';
import { HomeSecondeComponent } from './home-seconde.component';





export const HOMESECONDE_ROUTE: Route[] = [
  {
    path: 'home-seconde',
    component: HomeSecondeComponent,
  },

  { path: '**', component: Page404Component },
];