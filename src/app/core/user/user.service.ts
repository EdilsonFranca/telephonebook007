import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
// @ts-ignore
import jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root'})
export class UserService {

  // @ts-ignore
  private userSubject = new BehaviorSubject<User>(null);
  // @ts-ignore
  private userName: string;

  constructor(private tokenService: TokenService) {

    // tslint:disable-next-line:no-unused-expression
    this.tokenService.hasToken() &&
    this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
     const token = this.tokenService.getToken();
     const user =  jwt_decode(token) as User;
     this.userName = user.name;
     this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    // @ts-ignore
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
