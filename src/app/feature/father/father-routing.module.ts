import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FatherComponent } from './components/father/father.component';

const routes: Routes = [
  {
    path: '',
    component: FatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FatherRoutingModule { }
