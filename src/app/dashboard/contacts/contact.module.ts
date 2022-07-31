import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactModule} from "./contact/contact.module";
import {ContactListModule} from "./contact-list/contact-list.module";
import {ContactFormModule} from "./contact-form/contact-form.module";
import {ContactDetailsModule} from "./contact-details/contact-details.module";
@NgModule({
    imports: [
        ContactModule,
        ContactFormModule,
        ContactListModule,
        ContactDetailsModule,
        CommonModule,
        ReactiveFormsModule,
    ],
})
export class ContactsModule { }
