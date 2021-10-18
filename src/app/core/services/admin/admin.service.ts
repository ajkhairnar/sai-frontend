import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { ErrorhandleService } from '../../errorhandle/errorhandle.service';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_url="http://localhost/sai/";

  constructor(private http:HttpClient,
              private errorhandle:ErrorhandleService) { }

  //get admin
  admin_get = ():Observable<any> =>{
    return this.http.get(`${this.base_url}admin/admin_get`).pipe(catchError(this.errorhandle.handleError));
  }

  // create admin
  admin_create= (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/admin_create`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }

  //delete admin
  admin_delete = (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/admin_delete`,JSON.stringify(obj)).pipe(catchError(this.errorhandle.handleError));
  }

   //edit admin
   admin_edit = (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/admin_edit`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }

  //update admin
  admin_update = (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/admin_update`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }

}
