import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRouteRoutingModule } from './counter-route-routing.module';
import { CounterRouteComponent } from './components/counter-route/counter-route.component';


@NgModule({
  declarations: [
    CounterRouteComponent
  ],
  imports: [
    CommonModule,
    CounterRouteRoutingModule
  ]
})
export class CounterRouteModule { }
