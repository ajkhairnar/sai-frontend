import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPipe } from './pipes/color.pipe';
import { MltoltrPipe } from './pipes/mltoltr.pipe';
import { SstatusPipe } from './pipes/sstatus.pipe';
import { ServicePipe } from './pipes/service.pipe';
import { AreaPipe } from './pipes/area.pipe';


@NgModule({
  declarations: [
    ColorPipe,
    MltoltrPipe,
    SstatusPipe,
    ServicePipe,
    AreaPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ColorPipe,
    MltoltrPipe,
    SstatusPipe,
    ServicePipe,
    AreaPipe,
  ]
})
export class SharedModule { }
