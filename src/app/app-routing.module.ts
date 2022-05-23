import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/counter', pathMatch: 'full'},
  {path: 'counter', loadChildren: () => import('@counter/counter.module').then(m => m.CounterModule)},
  {path: 'pokemones', loadChildren: () => import('@pokemones/pokemones.module').then(m => m.PokemonesModule)},
  {path: 'father', loadChildren: () => import('@father/father.module').then(m => m.FatherModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
