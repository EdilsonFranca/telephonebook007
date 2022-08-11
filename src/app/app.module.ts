import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxMaskModule} from 'ngx-mask'
import {CoreModule} from "./core/core.module";
import {NavegateMapModule} from "./navegate-map/navegate-map.module";
import {AlertModule} from "./shared/components/alert/alert.module";
import {SignInComponent} from "./signin/signin.component";
import {VMessageModule} from "./shared/components/vmessage/vmessage.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NavegateMapModule,
    AlertModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      showMaskTyped: true,
      // clearIfNotMatch : true
    }),
    VMessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
