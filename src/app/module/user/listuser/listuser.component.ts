import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { ServicesService } from 'src/app/core/services/services/services.service';
import { AreaService } from 'src/app/core/services/area/area.service';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
 
  global_serach:string;
  more_filters:string;

  @ViewChild('closeBtn') closeBtn!: ElementRef;
  
  user_id:any;
  records:any=[];
  services:any=[];
  areas:any=[];
  data:any;
  message:any;
  status:any;
  count:any;
  recordnotfound:any;

  show:boolean = false;
  mobileexport:any='none';
 
  number_of_shows = [10,20,30,50]

  //globally search
  globalsearch:any='';

  // custome pipe
  sstatus:any='';
  area:any='';
  service:any='';

  //pagination
  p: number=1;
  entries:number=10;

  constructor(private _userservice: UserService,
              private _services:ServicesService,
              private _area:AreaService) {

    this.global_serach='';
    this.more_filters='';
   }

  ngOnInit(): void {

    this.get_area();
    this.get_service();
    this.get_user();

  }


//get user
get_user = () =>{

  this._userservice.user_get().subscribe(
    resp => {
      console.log(resp);
      this.data = resp;
      this.records = this.data.data;
      this.count = this.data.count;
      this.recordnotfound = this.data.message;

    },
    err => {
      this.status = err.errorStatus;
      this.message = err.errorDesc;
    }
  )

}


//get services
get_service = () =>{

  this._services.service_get().subscribe(
    resp => {
      console.log(resp);
      this.services = resp;
      this.services = this.services.data;
      this.recordnotfound = this.services.message;

    },
    err => {
      this.status = err.errorStatus;
      this.message = err.errorDesc;
    }
  )

}

 //get area
 get_area = () =>{

  this._area.area_get().subscribe(
    resp => {
      console.log(resp)
      this.areas = resp;
      this.areas = this.areas.data;
      this.recordnotfound = this.areas.message;

    },
    err => {
      this.status = err.errorStatus;
      this.message = err.errorDesc;
    }
  );
}

//delete service
delete_user = () =>{

  let obj = {id:this.user_id }
  this._userservice.user_delete(obj).subscribe(
    res => {

      this.data = res;
      this.status = this.data.status;
      this.message = this.data.message;

      this.get_user();
      this.closeBtn.nativeElement.click();
      
    },
    err => {
      this.status = err.errorStatus;
      this.message = err.errorDesc;
      this.closeBtn.nativeElement.click();
    }
  );
}


pass_ser_id = (id:any) => {
  this.user_id = id;
}



  show_global_serach = () => {
    this.global_serach = this.global_serach =='' ? 'active' : '';
  }

  show_more_filters = () =>{
    this.more_filters = this.more_filters =='' ? 'show' : '';
  }

  showmobile = () => {
    this.show = !this.show;
    this.mobileexport = this.show ? 'block' : 'none';
     
  }

  //number of row shows
  number_of_row_show = (number:any) =>{
      this.entries = number;
  }
  
  //reset filteres
  reset_filters = () =>{
    this.globalsearch='';
    this.sstatus='';
    this.area='';
    this.service=''; 
    this.entries=10;
  }

 
}
