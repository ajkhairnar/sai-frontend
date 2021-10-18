import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
const routes: Routes = [
  {
    path:'adduser',
    component:AdduserComponent,
    
  },
  {
    path:'listuser',
    component:ListuserComponent
  },
  {
    path : 'edituser/:id',
    component:AdduserComponent
  },
  {
    path : 'viewuser/:id',
    component:AdduserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
