import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddserviceComponent } from './addservice/addservice.component';
import { ListserviceComponent } from './listservice/listservice.component';

const routes: Routes = [
  {
    path:'addservice',
    component:AddserviceComponent,
    
  },
  {
    path:'listservice',
    component:ListserviceComponent
  },
  {
    path:'editservice/:id',
    component:AddserviceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
