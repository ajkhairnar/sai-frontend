import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse  } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError,retry } from 'rxjs/operators';
import { BehaviorSubject, Observable ,throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // base_url="https://connectwithjayesh.com//sai/index.php/";

  base_url="http://localhost/sai/";
  token:any;
  public userSubject: BehaviorSubject<any>;
  public user: Observable<any>;


  constructor(private http:HttpClient) {

    this.userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('token')!));
    this.user = this.userSubject.asObservable();

   }


  login_s = (obj:any) => {
    
    return this.http.post(`${this.base_url}admin/login`,JSON.stringify(obj)).pipe(map(
      response =>{
        if(response)
        {
          this.token = response;
          localStorage.setItem('token', JSON.stringify(this.token.token));
          this.userSubject.next(response);
        }
        // return response;
        // catchError(this.handleError) : pipe(catchError(this.handleError),
      }
    )
    )
  }

}
