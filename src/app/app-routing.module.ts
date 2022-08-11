import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/auth/auth.guard";
import {LoginGuard} from "./core/auth/login.guard";
import {SignInComponent} from "./signin/signin.component";

const routes: Routes = [
      {
        path: 'login',
        canActivate: [LoginGuard],
        component: SignInComponent,
      },
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule) ,
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
