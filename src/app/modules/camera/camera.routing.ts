import { Routes } from '@angular/router';
import { CameraComponent } from "./camera/camera.component";

export const CameraRoutes: Routes = [
  {
    path: '',
    component: CameraComponent,
    data: {title: 'Thông tin tài khoản', breadcrumb: 'Thông tin tài khoản'},
  },
];
