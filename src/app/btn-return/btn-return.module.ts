import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BtnReturnComponent} from './btn-return.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BtnReturnComponent
  ],
  declarations: [
    BtnReturnComponent
  ]
})
export class BtnReturnModule { }
