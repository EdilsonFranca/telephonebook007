import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotoComponent} from './photo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PhotoComponent
  ],
  declarations: [PhotoComponent]
})
export class PhotoModule { }
