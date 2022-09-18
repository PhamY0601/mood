import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { SharedMaterialModule } from "../../shared/shared-material.module";
import { CameraComponent } from "./camera/camera.component";
import { CameraRoutes } from "./camera.routing";
import { WebcamModule } from "ngx-webcam";
import { MusicComponent } from "./music/music.component";
import { AngMusicPlayerModule } from "ang-music-player";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CameraRoutes),
        SharedModule,
        SharedMaterialModule,
        WebcamModule,
        AngMusicPlayerModule,
        FormsModule,
    ],
    declarations: [
        CameraComponent,
        MusicComponent
    ]
})
export class CameraModule {
}
