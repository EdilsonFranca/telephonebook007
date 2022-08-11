import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ContactDetailsComponent} from "./contacts/contact-details/contact-details.component";
import {ContactFormComponent} from "./contacts/contact-form/contact-form.component";
import {ContactListResolver} from "./contacts/contact-list/contact-list.resolver";
import {ContactListComponent} from "./contacts/contact-list/contact-list.component";
import {AuthGuard} from "../core/auth/auth.guard";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: ContactListComponent,
        resolve: {
          contacts: ContactListResolver
        },
      },
      {
        path: 'form',
        canActivate: [AuthGuard],
        component: ContactFormComponent,
      },
      {
        path: ':id',
        canActivate: [AuthGuard],
        component: ContactDetailsComponent,
      },
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class DashboardRoutingModule { }

