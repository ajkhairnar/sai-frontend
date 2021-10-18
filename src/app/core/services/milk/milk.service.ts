import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { ErrorhandleService } from '../../errorhandle/errorhandle.service';
@Injectable({
  providedIn: 'root'
})
export class MilkService {

  base_url="http://localhost/sai/";

  constructor(private http:HttpClient,
              private errorhandle:ErrorhandleService) { }

  //get milktype
  milktype_get = ():Observable<any> =>{
    return this.http.get(`${this.base_url}milk/get_milktype`).pipe(catchError(this.errorhandle.handleError));
  }


  //edit milktype
  milktype_edit = (obj:any):Observable<any> => {

      return this.http.post(`${this.base_url}milk/milktype_edit`,JSON.stringify(obj)).pipe(catchError(this.errorhandle.handleError));
  }




}
