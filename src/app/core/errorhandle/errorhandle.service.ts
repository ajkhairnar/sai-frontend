import { Injectable } from '@angular/core';
import {HttpErrorResponse } from '@angular/common/http';
import {throwError} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorhandleService {

  errorData:any= {};
  errorTitle:any;
  errorDesc:any;
  errorStatus:any;
  constructor() { }


   handleError(error: HttpErrorResponse) {

    // console.log(error);
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);

      if(error.status==0)             // return status code 0 then server is offline
      {
        this.errorTitle="Error !";
        this.errorDesc="Server is Not Found. Please try again later";
        this.errorStatus = error.error.status;
        // console.log("Server is Not Found !");
      }
      else  {                            //return any status code(400) then show error
        this.errorTitle= "Error !";
        this.errorDesc = error.error.message;
        this.errorStatus = error.error.status;
        // console.log(error.error.message);
      }
    }

    // return an observable with a user-facing error message
    // this.errorData = {
    //   errorTitle: 'Oops! Request for document failed',
    //   errorDesc: 'Something bad happened. Please try again later.'
    // };

    this.errorData = {
      errorTitle : this.errorTitle,
      errorDesc  : this.errorDesc,
      errorStatus: this.errorStatus
    };
    // console.log(this.errorData);
    return throwError(this.errorData);
  }
}
