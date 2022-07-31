import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {PhotoModule} from "../../photo/photo.module";
import {ContactComponent} from "./contact.component";

  @NgModule({
      declarations: [ContactComponent],
      imports: [
          CommonModule,
          HttpClientModule,
          RouterModule,
          PhotoModule
      ],
      exports: [ContactComponent]
  })
export class ContactModule {}
