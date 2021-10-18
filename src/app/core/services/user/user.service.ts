import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { ErrorhandleService } from '../../errorhandle/errorhandle.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url="http://localhost/sai/";

  constructor(private http:HttpClient,
              private errorhandle:ErrorhandleService) { }

  //get user
  user_get = ():Observable<any> =>{
    return this.http.get(`${this.base_url}admin/user_get`).pipe(catchError(this.errorhandle.handleError));
  }


  // create user
  user_create= (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/user_create`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }

  // delete user
  user_delete = (obj:any):Observable<any> => {
    return this.http.post(`${this.base_url}admin/user_delete`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));
  }

  //edit user
  user_edit = (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/user_edit`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }

  //update user
  user_update = (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/user_update`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }





}
