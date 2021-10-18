import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listmilk',
  templateUrl: './listmilk.component.html',
  styleUrls: ['./listmilk.component.css']
})
export class ListmilkComponent implements OnInit {

  records:any=[];
  data:any;
  message:any;
  status:any;
  count:any;
  recordnotfound:any;

  constructor() { }

  ngOnInit(): void {
  }

}
