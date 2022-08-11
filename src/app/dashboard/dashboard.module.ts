import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard.routing.module';
import {NavegateMapModule} from '../navegate-map/navegate-map.module';
import {ContactsModule} from "./contacts/contact.module";
import {AlertModule} from "../shared/components/alert/alert.module";

@NgModule({
    imports: [
        CommonModule,
        ContactsModule,
        RouterModule,
        DashboardRoutingModule,
        NavegateMapModule,
        AlertModule,
    ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
