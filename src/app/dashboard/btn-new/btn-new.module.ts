import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BtnNewComponent} from './btn-new.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BtnNewComponent],
  declarations: [BtnNewComponent]
})
export class BtnNewModule { }
