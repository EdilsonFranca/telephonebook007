import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PageComponent} from './page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderModule} from '../header/header.module';
import {FooterModule} from '../footer/footer.module';
import {IvyCarouselModule} from "angular-responsive-carousel";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule,
    IvyCarouselModule,
  ],
  declarations: [
    PageComponent,
  ]
})
export class PageModule { }
