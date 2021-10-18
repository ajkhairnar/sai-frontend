import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { NgxPrintModule } from 'ngx-print';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
@NgModule({
  declarations: [
    AdduserComponent,
    ListuserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPrintModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  
  ]
})
export class UserModule {
  constructor() {
     console.log("user data");
  }
 }
