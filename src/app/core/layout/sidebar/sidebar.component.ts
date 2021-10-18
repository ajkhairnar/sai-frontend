import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // sidebar:any = [
  //   {
  //     title:"Dashboard",
  //     icon :"ni-dashlite",
  //     access:["admin","super"],
  //     submenu:false,
     
  //   },
  //   {
  //     title:"User Manage",
  //     icon : "ni-users",
  //     access : ["admin","super"],
  //     submenu : [
  //                 {
  //                   link:"/jk",
  //                   title:'Add User'
  //                 },
  //                 {
  //                   link:"/jk",
  //                   title:'List User'
  //                 }
  //               ]
  //   },

  //   {
  //     title:"Admin Manage",
  //     icon : "ni-users",
  //     access : ["super"],
  //     submenu : [
  //                 {
  //                   link:"/jk",
  //                   title:'Add Admin'
  //                 },
  //                 {
  //                   link:"/jk",
  //                   title:'List Admin'
  //                 }
  //               ]
  //   }

  // ]

  constructor() { }

  ngOnInit(): void {

  }

}
