import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@pokemones/shared/model';
import { PokemonService } from '../../shared/service/pokemon.service';

@Component({
  selector: 'app-pokemon-charizard',
  templateUrl: './pokemon-charizard.component.html',
  styleUrls: ['./pokemon-charizard.component.css'],
})
export class PokemonCharizardComponent implements OnInit {
  public charizard?: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(6).subscribe((pokemon) => {
      this.charizard = pokemon;
    });
  }
}
