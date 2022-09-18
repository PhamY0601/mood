import { Routes } from '@angular/router';
import {HomeComponent} from "./shared/component/layout/home/home.component";
import {SessionComponent} from "./shared/component/layout/session/session.component";
import {WelcomeComponent} from "./shared/component/layout/welcome/welcome.component";

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: WelcomeComponent ,
  },
  {
    path: '',
    component: SessionComponent ,
    children: [
      {
        path: 'sessions',
        loadChildren: () => import('./modules/sessions/sessions.module').then(m => m.SessionsModule),
      }
    ]
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'homepage',
        loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule),
      },
      {
        path: 'camera',
        loadChildren: () => import('./modules/camera/camera.module').then(m => m.CameraModule),
      },

    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
]

