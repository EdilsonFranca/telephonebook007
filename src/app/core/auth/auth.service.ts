import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import {environment} from '../../../environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(email: string, password: string) {
    return this.http
      .post(
        API + 'signin',
        { email, password },
        { observe: 'response'}
      )
      .pipe(tap(res => {
        // @ts-ignore
        const authToken =  res.body.token;
        this.userService.setToken(authToken);
      }));
  }
}
