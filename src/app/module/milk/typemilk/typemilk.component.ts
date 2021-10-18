import { Component, OnInit } from '@angular/core';
import { MilkService } from 'src/app/core/services/milk/milk.service';
@Component({
  selector: 'app-typemilk',
  templateUrl: './typemilk.component.html',
  styleUrls: ['./typemilk.component.css']
})
export class TypemilkComponent implements OnInit {

  
  records:any=[];
  data:any;
  message:any;
  status:any;
  count:any;
  recordnotfound:any;
  constructor(private _milk:MilkService) { }

  ngOnInit(): void {
    this.get_milktype();
  }


  // get milk type
  get_milktype = () => {

    this._milk.milktype_get().subscribe(
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



  // edit milk type
  edit_milktype = (id:any) => {
      
    let obj = {
      'id' : id,
    }

    this._milk.milktype_edit(obj).subscribe(

      res=>{
          console.log(res);
      },

      error=>{

      }

    )

  }


  //delete milk type
  delete_milktype = (id:any) => {

  }

}
