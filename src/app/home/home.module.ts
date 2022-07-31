import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
// tslint:disable-next-line:import-spacing
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './singup/singup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './singup/signup.service';
import {PageModule} from './page/page.module';
import {OrderDetailsModule} from './order-details/order-details.module';
import {NavegateMapModule} from '../dashboard/navegate-map/navegate-map.module';
import {HeaderModule} from './header/header.module';
import {FooterModule} from './footer/footer.module';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule,
    PageModule,
    OrderDetailsModule,
    NavegateMapModule,
    HeaderModule,
    FooterModule
  ],
    providers: [
        SignUpService
    ]
})
export class HomeModule {}
