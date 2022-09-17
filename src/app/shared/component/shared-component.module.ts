import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from "../shared-material.module";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AvatarComponent } from "./avatar/avatar.component";


const components = [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AvatarComponent
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
