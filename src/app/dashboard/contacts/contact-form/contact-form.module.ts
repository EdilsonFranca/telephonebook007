import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BtnReturnModule} from '../../btn-return/btn-return.module';
import {NavegateMapModule} from '../../navegate-map/navegate-map.module';
import {PhotoModule} from "../../photo/photo.module";
import {ContactFormComponent} from "./contact-form.component";
import {VMessageModule} from "../../shared/components/vmessage/vmessage.module";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        BtnReturnModule,
        NavegateMapModule,
        PhotoModule,
        VMessageModule,
    ],
  exports: [
    ContactFormComponent
  ],
    declarations: [ContactFormComponent]
})
export class ContactFormModule { }
