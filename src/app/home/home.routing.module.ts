import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/singup.component';
import {PageComponent} from './page/page.component';
import {PageResolver} from './page/page.resolver';
import {OrderDetailsComponent} from './order-details/order-details.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            component: PageComponent,
            resolve: {
              // categories: PageResolver
            },
          },
          {
            path: 'login',
            component: SignInComponent,
          },
          {
            path: 'signup',
            component: SignUpComponent,
          },
          {
            path: 'order/:id',
            component: OrderDetailsComponent,
          },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

