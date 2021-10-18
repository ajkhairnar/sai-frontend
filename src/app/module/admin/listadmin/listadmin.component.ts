import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/core/services/admin/admin.service';
@Component({
  selector: 'app-listadmin',
  templateUrl: './listadmin.component.html',
  styleUrls: ['./listadmin.component.css']
})
export class ListadminComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn!: ElementRef;

  records:any=[];
  data:any;
  message:any;
  status:any;
  count:any;
  recordnotfound:any;

  admin_id:any;

  globalsearch:any='';

  show:boolean = false;
  mobileexport:any='none';
  constructor(private _admin:AdminService) {

   }

  ngOnInit(): void {
    
    this. get_admin();
  }

   //get services
   get_admin = () =>{

    this._admin.admin_get().subscribe(
      resp => {
       
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

  
  //delete service
  delete_admin = () =>{

    let obj = {id:this.admin_id }
    this._admin.admin_delete(obj).subscribe(
      res => {
        this.data = res;
        this.status = this.data.status;
        this.message = this.data.message;
        this.get_admin();
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
    this.admin_id = id;
  }


  showmobile = () => {
    this.show = !this.show;
    this.mobileexport = this.show ? 'block' : 'none';
     
  }


 

}
