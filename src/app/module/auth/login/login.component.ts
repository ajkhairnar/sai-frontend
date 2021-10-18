import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/services/auth/login.service';
import { TokenStorageService } from 'src/app/core/services/token/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginbtn:any;
  messages:any=[
    {
      title:"Login Success",
      subtitle: "Welcome back",
      status : "alert-success",
      icon:"ni-check-circle"
    },
    {
      title:"Login Fail",
      subtitle: "Please enter valid credentials",
      status : "alert-danger",
      icon:"ni-cross-circle"
    }
  ];

  msg:any=false;
  constructor(private toastr:ToastrService, 
              private logins:LoginService,
              private token:TokenStorageService,
              private router:Router) { 

    this.loginbtn="Sign in";
    

  }

  ngOnInit(): void {

      //check user login or not
      if(this.token.isLogin()){
          this.router.navigate(['/dashboard']);
      }

  }

  //Login Form
  login_form = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(6)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)])
  });

  get username() { return this.login_form.get('username') }
  get password() { return this.login_form.get('password')}

  login = () =>{

    this.loginbtn = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span> Loading... </span>`;

    let obj = {
      username : this.username?.value,
      password : this.password?.value,
      key:'jk'
    }

    this.logins.login_s(obj).subscribe(

      data => {

        if(this.token.isLogin()){
          
          this.msg = this.messages[0];
          this.router.navigate(['dashboard'])
          .then(() => {
            window.location.reload();
          });  
          
          // setTimeout(() => {
           
          // }, 5000);

        }else{

          setTimeout(() => {
            this.loginbtn="Sign in";
          }, 2000);
        }
        
      },
      error => {
        setTimeout(() => {
          this.loginbtn="Sign in";
          this.msg = this.messages[1];
        }, 2000);
        console.log("error")

      }
    )


  }



}
