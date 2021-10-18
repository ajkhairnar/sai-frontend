import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { TokenStorageService } from 'src/app/core/services/token/token-storage.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
  message:any;
  data:any;
  status:any;
  is_edit_id:any;
  is_edit:boolean=false;

  show:boolean = false;
  mobileexport:any='none';
  
  constructor(private _admin : AdminService,
              private _token:TokenStorageService,
              private _activateroute:ActivatedRoute) {

    // for edit admin
    this._activateroute.params.subscribe(
      (params) => {

        if(params["id"]) {
          this.is_edit = true;
          this.edit_admin(params["id"]);
        }
      }
    );

  }

  ngOnInit(): void {
  }


  adminform = new FormGroup({

    first_name  : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    middle_name : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    last_name   : new FormControl('',Validators.required),
    mobile      : new FormControl('',Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")),
    email       : new FormControl('',Validators.email),
    username    : new FormControl('',[Validators.required,Validators.minLength(5)]),
    password    : new FormControl('',[Validators.required,Validators.minLength(5)]),
    is_status   : new FormControl('',Validators.required)

  });


  get first_name()    { return this.adminform.get('first_name')}
  get middle_name()   { return this.adminform.get('middle_name')}
  get last_name()     { return this.adminform.get('last_name')}
  get mobile()        { return this.adminform.get('mobile')}
  get email()         { return this.adminform.get('email')}
  get username()      { return this.adminform.get('username')}
  get password()      { return this.adminform.get('password')}
  get is_status()     { return this.adminform.get('is_status')}

  create_admin = () => {

    let obj = {
      first_name  : this.first_name?.value.toLowerCase(),
      middle_name : this.middle_name?.value.toLowerCase(),
      last_name   : this.last_name?.value.toLowerCase(),
      mobile      : this.mobile?.value,
      email       : this.email?.value,
      username    : this.username?.value,
      password    : this.password?.value,
      role_name   : 'admin',
      is_status   : this.is_status?.value,
      create_by   : this._token.get_decode_token().data['id']
    }

    this._admin.admin_create(obj).subscribe(
      res => {
        this.data = res;
        this.status = this.data.status;
        this.message = this.data.message;
        this.adminform.reset();
        this.adminform.patchValue({ 'is_status' : ''});
      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
        
      }
    );
  }


  //edit admin
  edit_admin = (id:any) =>{
    let obj = { id : id};
    this.is_edit_id = id;
    this._admin.admin_edit(obj).subscribe(
      res => {
        this.data = res;
        this.data = this.data.data;

        this.adminform.patchValue({
          first_name  : this.data.first_name,
          middle_name : this.data.middle_name,
          last_name   : this.data.last_name,
          mobile      : this.data.mobile,
          email       : this.data.email,
          username    : this.data.username,
          password    : this.data.password,
          is_status   : this.data.is_status
        })

      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
      }
    )
  }


  //update service
   update_admin = () =>{

    let obj = {
      id          : this.is_edit_id,
      first_name  : this.first_name?.value.toLowerCase(),
      middle_name : this.middle_name?.value.toLowerCase(),
      last_name   : this.last_name?.value.toLowerCase(),
      mobile      : this.mobile?.value,
      email       : this.email?.value,
      username    : this.username?.value,
      password    : this.password?.value,
      role_name   : 'admin',
      is_status   : this.is_status?.value,
     
      update_by : this._token.get_decode_token().data['id']
    }




    this._admin.admin_update(obj).subscribe(
      res => {
        this.data = res;
        this.status = this.data.status;
        this.message = this.data.message;
      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
      }
    );

  }
  
  showmobile = () => {
    this.show = !this.show;
    this.mobileexport = this.show ? 'block' : 'none';
     
  }

}
