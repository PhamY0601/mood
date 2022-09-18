import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsRoutes } from './sessions.routing';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { SharedMaterialModule } from "../../shared/shared-material.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SessionsRoutes),
        SharedModule,
        SharedMaterialModule,

    ],
    declarations: [
        PageNotFoundComponent
    ]
})
export class SessionsModule {
}
