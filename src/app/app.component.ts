import { Component } from '@angular/core';
import { LoginService } from './core/services/auth/login.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sai';
  isLogin = false;
  constructor(private login:LoginService){
   
  }

  ngOnInit(): void {
    this.login.user.subscribe(
      data => {
        if(data !="" && data!=null)
        {
          this.isLogin = true;
        }else{
          this.isLogin = false;
        }
      }
    )
  }

}
