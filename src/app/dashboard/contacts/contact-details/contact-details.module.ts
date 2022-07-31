import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BtnReturnModule} from '../../btn-return/btn-return.module';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';
import {PhotoModule} from "../../photo/photo.module";
import {ContactModule} from "../contact/contact.module";
import {ContactDetailsComponent} from "./contact-details.component";
import {VMessageModule} from "../../shared/components/vmessage/vmessage.module";

@NgModule({
  imports: [
    CommonModule,
    ContactModule,
    RouterModule,
    ReactiveFormsModule,
    BtnReturnModule,
    NavegateMapModule,
    PhotoModule,
    VMessageModule,
  ],
    declarations: [
      ContactDetailsComponent,
    ]
})
export class ContactDetailsModule {}
