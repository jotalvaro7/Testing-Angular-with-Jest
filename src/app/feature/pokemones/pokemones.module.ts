import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonesRoutingModule } from './pokemones-routing.module';
import { PokemonComponent } from './components/pokemon.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCharizardComponent } from './components/pokemon-charizard/pokemon-charizard.component';
import { PokemonService } from './shared/service/pokemon.service';

@NgModule({
  declarations: [
    PokemonComponent,
    PokemonListComponent,
    PokemonCharizardComponent,
  ],
  imports: [CommonModule, PokemonesRoutingModule],
  providers: [PokemonService],
})
export class PokemonesModule {}
