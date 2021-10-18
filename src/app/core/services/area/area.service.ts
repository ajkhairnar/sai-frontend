import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { ErrorhandleService } from '../../errorhandle/errorhandle.service';
@Injectable({
  providedIn: 'root'
})
export class AreaService {

  base_url="http://localhost/sai/";

  constructor(private http:HttpClient,
              private errorhandle:ErrorhandleService) { }

  //get area
  area_get = ():Observable<any> =>{
    return this.http.get(`${this.base_url}admin/area_get`).pipe(catchError(this.errorhandle.handleError));
  }

  area_active_get = ():Observable<any> =>{
    return this.http.get(`${this.base_url}admin/area_active_get`).pipe(catchError(this.errorhandle.handleError));

  }

  // create area
  area_create= (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/area_create`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }

  // delete area
  area_delete = (obj:any):Observable<any> => {
    return this.http.post(`${this.base_url}admin/area_delete`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));
  }

  //edit area
  area_edit = (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/area_edit`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }

  //update area
  area_update = (obj:any):Observable<any> =>{
    return this.http.post(`${this.base_url}admin/area_update`,JSON.stringify(obj) ).pipe(catchError(this.errorhandle.handleError));

  }
}
