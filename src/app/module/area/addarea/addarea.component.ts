import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AreaService } from 'src/app/core/services/area/area.service';
import { TokenStorageService } from 'src/app/core/services/token/token-storage.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-addarea',
  templateUrl: './addarea.component.html',
  styleUrls: ['./addarea.component.css']
})
export class AddareaComponent implements OnInit {

  message:any;
  data:any;
  status:any;
  is_edit_id:any;
  is_edit:any=false;

  show:boolean = false;
  mobileexport:any='none';


  constructor(private _area:AreaService,
              private _token:TokenStorageService,
              private _activateroute : ActivatedRoute) { 

    // for edit service
    this._activateroute.params.subscribe(
      (params) => {

        if(params["id"]) {
          this.is_edit = true;
          this.edit_area(params["id"]);
        }
      }
    );
                
  }

  ngOnInit(): void { 


  }




  areaform = new FormGroup({
    area : new FormControl('',Validators.required),
    is_status : new FormControl('',Validators.required)
  });


  get area()     { return this.areaform.get('area')}
  get is_status()   { return this.areaform.get('is_status')}


  //create area
  create_area = () =>{
    let obj = {
      area   : this.area?.value.toLowerCase(),
      is_status : this.is_status?.value,
      create_by : this._token.get_decode_token().data['id']
    }

    
    this._area.area_create(obj).subscribe(
      res => {
        this.data = res;
        this.status = this.data.status;
        this.message = this.data.message;
        this.areaform.reset();
        this.areaform.patchValue({ 'is_status' : ''});
      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
      }
    );

  }


  //edit area
  edit_area = (id:any) =>{
    let obj = { id : id};
    this.is_edit_id = id;
    this._area.area_edit(obj).subscribe(
      res => {
        this.data = res;
        this.data = this.data.data;
        this.areaform.patchValue({
          "area"  : this.data.area,
          "is_status"  : this.data.is_status,
        })
      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
      }
    )
  }


  //update area
   update_area = () =>{
    let obj = {
      id: this.is_edit_id,
      area   : this.area?.value.toLowerCase(),
      is_status : this.is_status?.value,
      update_by : this._token.get_decode_token().data['id']
    }

    this._area.area_update(obj).subscribe(
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
