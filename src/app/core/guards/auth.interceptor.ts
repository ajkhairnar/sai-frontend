import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
    constructor(){}
   
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
       
        let token = JSON.parse(localStorage.getItem('token')!);

 
            req = req.clone({  
                setHeaders: {  
                    Authorization: `Bearer ${token}`,
                    // 'Content-Type' : 'application/json',
                    key :'jk'
                }  
            });  
      
            console.log(req);
      
        return next.handle(req);
        // throw new Error("Method not implemented.");
    }
    
}