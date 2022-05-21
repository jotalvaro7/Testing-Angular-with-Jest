import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCharizardComponent } from './components/pokemon-charizard/pokemon-charizard.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './components/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonComponent,
    children:[
      {path: 'charizard', component: PokemonCharizardComponent},
      {path: '', component: PokemonListComponent}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonesRoutingModule { }
