import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServicesService } from 'src/app/core/services/services/services.service';
import { TokenStorageService } from 'src/app/core/services/token/token-storage.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.component.html',
  styleUrls: ['./addservice.component.css']
})

export class AddserviceComponent implements OnInit {

  message:any;
  data:any;
  status:any;
  is_edit_id:any;
  is_edit:any=false;

  show:boolean = false;
  mobileexport:any='none';
  
  constructor(private _services:ServicesService,
              private _token:TokenStorageService,
              private _activateroute : ActivatedRoute) { 

    // for edit service
    this._activateroute.params.subscribe(
      (params) => {

        if(params["id"]) {
          this.is_edit = true;
          this.edit_service(params["id"]);
        }
      }
    );
                
  }

  ngOnInit(): void { 
  }


  serviceform = new FormGroup({
    service : new FormControl('',Validators.required),
    is_status : new FormControl('',Validators.required)
  });


  get service()     { return this.serviceform.get('service')}
  get is_status()   { return this.serviceform.get('is_status')}


  //create service
  create_service = () =>{
    let obj = {
      service   : this.service?.value.toLowerCase(),
      is_status : this.is_status?.value,
      create_by : this._token.get_decode_token().data['id']
    }

    
    this._services.service_create(obj).subscribe(
      res => {
        this.data = res;
        this.status = this.data.status;
        this.message = this.data.message;
        this.serviceform.reset();
        this.serviceform.patchValue({ 'is_status' : ''});
      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
      }
    );

  }


  //edit service
  edit_service = (id:any) =>{
    let obj = { id : id};
    this.is_edit_id = id;
    this._services.service_edit(obj).subscribe(
      res => {
        this.data = res;
        this.data = this.data.data;
        this.serviceform.patchValue({
          "service"  : this.data.service,
          "is_status"  : this.data.is_status,
        })
      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
      }
    )
  }


  //update service
   update_service = () =>{
    let obj = {
      id: this.is_edit_id,
      service   : this.service?.value.toLowerCase(),
      is_status : this.is_status?.value,
      update_by : this._token.get_decode_token().data['id']
    }

    this._services.service_update(obj).subscribe(
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
