import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token/token-storage.service'; 
import {Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name:String='';
  email:String='';
  role:String='';
  constructor(private token:TokenStorageService,
              private router:Router) { }

  ngOnInit(): void {

  let details = this.token.get_decode_token();
    this.name = details.data.name;
    this.email = details.data.email;
    this.role =  details.data.role;
  }


  logout = () =>{
      if(this.token.removeToken()){
        this.router.navigate(['/login']).then(()=>{ window.location.reload() })
      }
  }

}
