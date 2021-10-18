import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddareaComponent } from './addarea/addarea.component';
import { ListareaComponent } from './listarea/listarea.component';

const routes: Routes = [
  {
    path:'addarea',
    component:AddareaComponent,
    
  },
  {
    path:'listarea',
    component:ListareaComponent
  },
  {
    path:'editarea/:id',
    component:AddareaComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }
