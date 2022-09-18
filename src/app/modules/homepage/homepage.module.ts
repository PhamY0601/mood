import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { SharedMaterialModule } from "../../shared/shared-material.module";
import { HomePageRoutes } from "./homepage.routing";
import {HomepageComponent} from "./homepage/homepage.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(HomePageRoutes),
        SharedModule,
        SharedMaterialModule,


    ],
    declarations: [
        HomepageComponent
    ]
})
export class HomepageModule {
}
