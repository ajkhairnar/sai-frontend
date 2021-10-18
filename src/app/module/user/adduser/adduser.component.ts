import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AreaService } from 'src/app/core/services/area/area.service';
import { ServicesService } from 'src/app/core/services/services/services.service';
import { TokenStorageService } from 'src/app/core/services/token/token-storage.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  
  message:any;
  data:any;
  status:any;
  is_edit_id:any;
  is_edit:boolean=false;
  is_view:boolean = false;
  is_password_show:boolean=false;

  services:any=[];
  areas:any=[];

 
  
  cow_milk_ltr:number = 0;
  is_cow:Number=0;
  buffelo_milk_ltr:number = 0;
  is_buffelo:Number=0;

  
  show:boolean = false;
  mobileexport:any='none';


  constructor(private _area : AreaService,
              private _service :ServicesService,
              private _token:TokenStorageService,
              private _user :UserService,
              private _activateroute :ActivatedRoute) { 

            // for edit admin
          this._activateroute.params.subscribe(
            (params) => {
              
              this._activateroute.queryParams.subscribe(para => { this.is_view = para.is_view });
             

              if(params["id"]) {
                this.is_edit = true;
                this.edit_user(params["id"]);
              }
            }
          );



  }

  ngOnInit(): void {
   
    this.get_active_service();
    this.get_active_area();
  }

  //get active service
  get_active_service = () => {
    this._service.service_active_get().subscribe(
      res => {
       this.services = res;
       this.services = this.services.data;
       
      },
      err => {

      }
    )
  }

  //get active area
  get_active_area = () => {
    this._area.area_active_get().subscribe(
      res => {
       this.areas = res;
       this.areas = this.areas.data;
       console.log(this.area)
      },
      err => {

      }
    )
  }


  // password generate 
  password_generate = () => {
    var pass='';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz0123456789@#$';
              
            for (let i = 1; i <= 10; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
              pass += str.charAt(char)
            }
              
    return pass;
  }



  //username generate
  username_generate = () =>{
    var pass='';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                    'abcdefghijklmnopqrstuvwxyz';

            for (let i = 1; i <= 6; i++) {
                var char = Math.floor(Math.random()
                            * str.length + 1);
                  
              pass += str.charAt(char)
            }
    
    return pass;
  
  }


  userform = new FormGroup({

    first_name  : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    middle_name : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    last_name   : new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
    mobile      : new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    email       : new FormControl('',Validators.email),
    service     : new FormControl('',Validators.required),
    area        : new FormControl('',Validators.required),
    address      : new FormControl('',Validators.required),
    cow_milk     : new FormControl('',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]),
    buffelo_milk  : new FormControl('',[Validators.required,Validators.maxLength(5),Validators.pattern("^[0-9]+$")]),
   
    username    : new FormControl(this.username_generate() ,[Validators.required,Validators.minLength(5)]),
    password    : new FormControl(this.password_generate(),[Validators.required,Validators.minLength(5)]),
    is_status   : new FormControl('',Validators.required),
    start_delivery : new FormControl('',Validators.required)

  });

  

  get first_name()    { return this.userform.get('first_name')}
  get middle_name()   { return this.userform.get('middle_name')}
  get last_name()     { return this.userform.get('last_name')}
  get mobile()        { return this.userform.get('mobile')}
  get email()         { return this.userform.get('email')}
  get service()       { return this.userform.get('service')}
  get area()          { return this.userform.get('area')}
  get address()       { return this.userform.get('address')}
  get cow_milk()      { return this.userform.get('cow_milk')}
  get buffelo_milk()  { return this.userform.get('buffelo_milk')}

  get username()      { return this.userform.get('username')}
  get password()      { return this.userform.get('password')}
  get is_status()     { return this.userform.get('is_status')}
  get start_delivery()     { return this.userform.get('start_delivery')}



  // milk type conversion
  mltoltr = (type:String) => {

      if(type == 'cow') {
        this.cow_milk_ltr=this.userform.value.cow_milk/1000;
        //user get cow milk is_buffelo is 1 either 0
        this.is_cow = this.cow_milk_ltr > 0 ? 1 : 0;

      }else if(type == 'buffelo') {
         this.buffelo_milk_ltr=this.userform.value.buffelo_milk/1000;
        //user get buffelo milk is_buffelo is 1 either 0
        this.is_buffelo = this.buffelo_milk_ltr > 0 ? 1 : 0;

      }else {
        alert("error");
      }

  }


  // user create
  create_user = () => {
    let obj = {
      first_name    : this.first_name?.value.toLowerCase(),
      middle_name   : this.middle_name?.value.toLowerCase(),
      last_name     : this.last_name?.value.toLowerCase(),
      mobile        : this.mobile?.value,
      email         : this.email?.value,
      service       : this.service?.value.toLowerCase(),
      area          : this.area?.value.toLowerCase(),
      address       : this.address?.value,
      cow_milk      : this.cow_milk?.value > 0 ? this.cow_milk?.value : 0,
      is_cow        : this.is_cow,
      buffelo_milk  : this.buffelo_milk?.value > 0 ? this.buffelo_milk?.value : 0,
      is_buffelo    : this.is_buffelo,
      username      : this.username?.value,
      password      : this.password?.value,
      is_status     : this.is_status?.value,
      start_delivery : this.start_delivery?.value,
      create_by     : this._token.get_decode_token().data['id']

    }

    

    console.log(obj);

    this._user.user_create(obj).subscribe(
      res => {
        this.data = res;
        this.status = this.data.status;
        this.message = this.data.message;
        window.scrollTo(0,0);
        this.userform.reset();
        this.userform.patchValue({ 'is_status' : '', 'area' : '', 'service' : ''});
      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
        window.scrollTo(0,0);
      }
    );

  }


  //username regenerate
  regenerate_username = () => this.userform.controls['username'].setValue(this.username_generate());
  

  //edit user 
  edit_user = (id:any) => {

    let obj = { id : id};
    this.is_edit_id = id;
    this._user.user_edit(obj).subscribe(
      res => {
        this.data = res;
        this.data = this.data.data;
        console.log(this.data)

        this.userform.patchValue({
          first_name  : this.data.first_name,
          middle_name : this.data.middle_name,
          last_name   : this.data.last_name,
          mobile      : this.data.mobile,
          email       : this.data.email,
          service     : this.data.service,
          area        : this.data.area,
          address     : this.data.address,
          cow_milk    : this.data.cow_milk,
          buffelo_milk : this.data.buffelo_milk,
          start_delivery : this.data.start_delivery, // yyyy-mm-dd
          username    : this.data.username,
          password    : this.data.password,
          is_status   : this.data.is_status
        });

        this.mltoltr('cow')
        this.mltoltr('buffelo')

      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
      }
    )
  }

  // update create
  update_user = () => {

    let obj = {
      id          : this.is_edit_id,
      first_name    : this.first_name?.value.toLowerCase(),
      middle_name   : this.middle_name?.value.toLowerCase(),
      last_name     : this.last_name?.value.toLowerCase(),
      mobile        : this.mobile?.value,
      email         : this.email?.value,
      service       : this.service?.value.toLowerCase(),
      area          : this.area?.value.toLowerCase(),
      address       : this.address?.value,
      cow_milk      : this.cow_milk?.value > 0 ? this.cow_milk?.value : 0,
      is_cow        : this.is_cow,
      buffelo_milk  : this.buffelo_milk?.value > 0 ? this.buffelo_milk?.value : 0,
      is_buffelo    : this.is_buffelo,
      username      : this.username?.value,
      password      : this.password?.value,
      is_status     : this.is_status?.value,
      start_delivery : this.start_delivery?.value,
      update_by     : this._token.get_decode_token().data['id']
    }

    this._user.user_update(obj).subscribe(
      res => {
        this.data = res;
        this.status = this.data.status;
        this.message = this.data.message;
        window.scrollTo(0,0);
      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
        window.scrollTo(0,0);
      }
    );


  }


  //password toggle
  password_toggle = () => this.is_password_show = !this.is_password_show;
 

  showmobile = () => {
    this.show = !this.show;
    this.mobileexport = this.show ? 'block' : 'none';
     
  }
  
}
