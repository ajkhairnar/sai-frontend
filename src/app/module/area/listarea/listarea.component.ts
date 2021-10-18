import { Component, OnInit } from '@angular/core';
import { AreaService } from 'src/app/core/services/area/area.service';
import {ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-listarea',
  templateUrl: './listarea.component.html',
  styleUrls: ['./listarea.component.css']
})
export class ListareaComponent implements OnInit {

  @ViewChild('closeBtn') closeBtn!: ElementRef;
  
  records:any=[];
  data:any;
  message:any;
  status:any;
  count:any;
  recordnotfound:any;
  globalsearch:any='';
  area_id:any;

  show:boolean = false;
  mobileexport:any='none';

  
  constructor(private _area:AreaService) { }

  ngOnInit(): void {
    this.get_area();
  }

   //get area
   get_area = () =>{

    this._area.area_get().subscribe(
      resp => {
        console.log(resp)
        this.data = resp;
        this.records = this.data.data;
        this.count = this.data.count;
        this.recordnotfound = this.data.message;

      },
      err => {
        this.status = err.errorStatus;
        this.message = err.errorDesc;
      }
    );
  }


   //delete area
   delete_area = () =>{

    let obj = {id:this.area_id }
    this._area.area_delete(obj).subscribe(
      res => {
        this.data = res;
        this.status = this.data.status;
        this.message = this.data.message;
        this.get_area();
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
    this.area_id = id;
  }

  showmobile = () => {
    this.show = !this.show;
    this.mobileexport = this.show ? 'block' : 'none';
     
  }


}
