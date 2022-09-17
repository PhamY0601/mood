import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentModule } from "./component/shared-component.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentModule,

  ],
  exports: [
    SharedComponentModule,
  ]
})
export class SharedModule { }
