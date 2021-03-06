import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module'; 

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
  imports: [PokemonesRoutingModule, SharedModule],
  providers: [PokemonService],
})
export class PokemonesModule {}
