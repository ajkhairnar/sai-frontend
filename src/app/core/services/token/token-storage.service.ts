import { Injectable } from '@angular/core';
import  {LoginService } from '../auth/login.service';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private login:LoginService,
              private jwt:JwtHelperService) { }

  //getToken
  getToken = () =>
  {
    return localStorage.getItem('token');
  }


  //check user login or not
  isLogin = () =>
  {
    const usertoken=this.getToken();
    if(usertoken != null) {
      return true;
    }
    return false;
  }

  //remove token
  removeToken = () =>
  {
    localStorage.removeItem('token');
    this.login.userSubject.next(null);
    return true;
  }


  // decode token
  get_decode_token = () => 
  {
    let token = JSON.parse(localStorage.getItem('token')!);
    return this.jwt.decodeToken(token);
  }


}
