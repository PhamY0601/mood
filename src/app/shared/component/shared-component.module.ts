import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from "../shared-material.module";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { SessionComponent } from "./layout/session/session.component";
import { WelcomeComponent } from "./layout/welcome/welcome.component";


const components = [
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AvatarComponent,
    SessionComponent,
    WelcomeComponent
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
