import { Routes } from '@angular/router';
import {HomeComponent} from "./shared/component/layout/home/home.component";

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [

    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
]

