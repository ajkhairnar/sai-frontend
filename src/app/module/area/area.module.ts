import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AddareaComponent } from './addarea/addarea.component';
import { ListareaComponent } from './listarea/listarea.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddareaComponent,
    ListareaComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ]
})
export class AreaModule { }
