import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/counter', pathMatch: 'full'},
  {path: 'counter', loadChildren: () => import('@counter/counter.module').then(mod => mod.CounterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
