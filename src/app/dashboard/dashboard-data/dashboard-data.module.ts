import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardDataComponent} from "./dashboard-data.component";
import {NavegateMapModule} from "../navegate-map/navegate-map.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavegateMapModule,
  ],
  declarations: [
    DashboardDataComponent,
]
})
export class DashboardDataModule { }
