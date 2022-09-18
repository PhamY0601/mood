import { Routes } from '@angular/router';
import { CameraComponent } from "./camera/camera.component";
import {MusicComponent} from "./music/music.component";

export const CameraRoutes: Routes = [
  {
    path: '',
    component: CameraComponent,
  },
  {
    path: 'listen-to-music',
    component: MusicComponent
  }
];
