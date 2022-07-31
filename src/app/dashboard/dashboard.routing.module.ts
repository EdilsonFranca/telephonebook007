import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {ContactDetailsComponent} from "./contacts/contact-details/contact-details.component";
import {ContactFormComponent} from "./contacts/contact-form/contact-form.component";
import {ContactListResolver} from "./contacts/contact-list/contact-list.resolver";
import {ContactListComponent} from "./contacts/contact-list/contact-list.component";
import { DashboardDataComponent} from "./dashboard-data/dashboard-data.component";


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardDataComponent,
      },
      {
        path: 'contact',
        component: ContactListComponent,
        resolve: {
          contacts: ContactListResolver
        },
      },
      {
        path: 'contact/form',
        component: ContactFormComponent,
      },
      {
        path: 'contact/:id',
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

