import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { AddserviceComponent } from './addservice/addservice.component';
import { ListserviceComponent } from './listservice/listservice.component';
import {ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AddserviceComponent,
    ListserviceComponent,
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ReactiveFormsModule,
    NgxPrintModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class ServicesModule { }
