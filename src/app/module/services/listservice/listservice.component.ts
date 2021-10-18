import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services/services.service';
import {ViewChild, ElementRef} from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-listservice',
  templateUrl: './listservice.component.html',
  styleUrls: ['./listservice.component.css']
})
export class ListserviceComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn!: ElementRef;
  
  records:any=[];
  data:any;
  message:any;
  status:any;
  count:any;
  recordnotfound:any;

  showModal : boolean=false;
  
  service_id:any;

  header:any;
  globalsearch:any='';

  show:boolean = false;
  mobileexport:any='none';

  constructor(private _services:ServicesService) { }
  
  ngOnInit(): void {

    this.get_service();
    
  }


  //get services
  get_service = () =>{

    this._services.service_get().subscribe(
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



  //delete service
  delete_service = () =>{

    let obj = {id:this.service_id }
    this._services.service_delete(obj).subscribe(
      res => {
        this.data = res;
        this.status = this.data.status;
        this.message = this.data.message;
        this.get_service();
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
    this.service_id = id;
  }


  // create pdf
  create_pdf = () => {
    this._services.service_get().subscribe(
      resp => {
        this.data = resp;
        this.records = this.data.data;

        this.header = Object.keys(this.records[0]);
    

      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
      }
    )
  }

  showmobile = () => {
    this.show = !this.show;
    this.mobileexport = this.show ? 'block' : 'none';
     
  }




}
