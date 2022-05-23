import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { PokemonService } from '../../../../../src/app/feature/pokemones/shared/service/pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  test('deberia traer informacion de bulbasaur', (done) => {
    service.getPokemon(1).subscribe(pokemon => {
      console.log(pokemon)
      expect(pokemon.name).toBe('bulbasaur')

      done();
    })
  })
});
