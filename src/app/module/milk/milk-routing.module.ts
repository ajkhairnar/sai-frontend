import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmilkComponent } from './addmilk/addmilk.component';
import { ListmilkComponent } from './listmilk/listmilk.component';
import { RatemilkComponent } from './ratemilk/ratemilk.component';
import { TypemilkComponent } from './typemilk/typemilk.component';

const routes: Routes = [
  {
    path:'addmilk',
    component:AddmilkComponent,
    
  },
  {
    path:'listmilk',
    component:ListmilkComponent
  },
  {
    path:'milkrate',
    component:RatemilkComponent
  },
  {
    path:'milktype',
    component:TypemilkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MilkRoutingModule { }
