import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SharedModule} from "./shared/shared.module";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {rootRouterConfig} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: false, relativeLinkResolution: 'legacy'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
