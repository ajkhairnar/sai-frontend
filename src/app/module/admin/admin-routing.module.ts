import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddadminComponent } from './addadmin/addadmin.component';
import { ListadminComponent } from './listadmin/listadmin.component';

const routes: Routes = [
  {
    path:'addadmin',
    component:AddadminComponent,
    
  },
  {
    path:'listadmin',
    component:ListadminComponent
  },
  {
    path:'editadmin/:id',
    component:AddadminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
