import {Component, OnInit} from '@angular/core';
import {User} from "../core/user/user";
import {Observable} from "rxjs";
import {UserService} from "../core/user/user.service";
import {Router} from "@angular/router";
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent{
  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router:Router) {

    this.user$ = userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['login']);
  }
}

