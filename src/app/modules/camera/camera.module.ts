import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { SharedMaterialModule } from "../../shared/shared-material.module";
import { CameraComponent } from "./camera/camera.component";
import { CameraRoutes } from "./camera.routing";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CameraRoutes),
        SharedModule,
        SharedMaterialModule,
    ],
    declarations: [
        CameraComponent
    ]
})
export class CameraModule {
}
