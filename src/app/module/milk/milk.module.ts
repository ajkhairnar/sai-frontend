import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MilkRoutingModule } from './milk-routing.module';
import { ListmilkComponent } from './listmilk/listmilk.component';
import { AddmilkComponent } from './addmilk/addmilk.component';
import { RatemilkComponent } from './ratemilk/ratemilk.component';
import { TypemilkComponent } from './typemilk/typemilk.component';


@NgModule({
  declarations: [
    ListmilkComponent,
    AddmilkComponent,
    RatemilkComponent,
    TypemilkComponent,
  ],
  imports: [
    CommonModule,
    MilkRoutingModule
  ]
})
export class MilkModule { }
