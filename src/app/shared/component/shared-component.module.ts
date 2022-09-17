import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from "../shared-material.module";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './layout/home/home.component';


const components = [
    HomeComponent
];

@NgModule({
    declarations: components,
    imports: [
        CommonModule,
        SharedMaterialModule,
        RouterModule,
    ],
    exports: [
        ...components
    ],


})
export class SharedComponentModule {
}
