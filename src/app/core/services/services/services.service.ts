import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { ErrorhandleService } from '../../errorhandle/errorhandle.service';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  base_url="http://localhost/sai/";

  constructor(private http:HttpClient,
              private errorhandle:ErrorhandleService) { }

  //get service
  service_get = ():Observable<any> =>{
    return this.http.get(`${this.base_url}admin/service_get`).pipe(catchError(this.errorhandle.handleError));
  }

  service_active_get = ():Observable<any> =>{
    return this.http.get(`${this.base_url}admin/service_active_get`).pipe(catchError(this.errorhandle.handleError));

  }


  // create service
  service_create= (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/service_create`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }

  // delete service
  service_delete = (obj:any):Observable<any> => {
    return this.http.post(`${this.base_url}admin/service_delete`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));
  }

  //edit service
  service_edit = (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/service_edit`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }

  //update service
  service_update = (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/service_update`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }



}
