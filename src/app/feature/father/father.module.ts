import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module'; 

import { FatherRoutingModule } from './father-routing.module';
import { FatherComponent } from './components/father/father.component';


@NgModule({
  declarations: [
    FatherComponent
  ],
  imports: [
    SharedModule,
    FatherRoutingModule
  ]
})
export class FatherModule { }
