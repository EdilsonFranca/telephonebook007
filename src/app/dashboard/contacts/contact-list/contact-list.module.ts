import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NavegateMapModule} from '../../../navegate-map/navegate-map.module';
import {BtnNewModule} from '../../../btn-new/btn-new.module';
import {ContactDetailsModule} from "../contact-details/contact-details.module";
import {ContactListComponent} from "./contact-list.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {CardModule} from "../../../shared/components/card/card.module";
import {ContactModule} from "../contact/contact.module";
import {SearchComponent} from "./contacts/search/search.component";
import {FilterByDescription} from "./filter-by-description.pipe";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ContactDetailsModule,
    NavegateMapModule,
    BtnNewModule,
    CardModule,
    ContactModule
  ],
    declarations: [
        ContactListComponent,
        ContactsComponent,
        SearchComponent,
        FilterByDescription,
    ]
})

export class ContactListModule {}
