import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCharizardComponent } from './pokemon-charizard.component';

describe('PokemonCharizardComponent', () => {
  let component: PokemonCharizardComponent;
  let fixture: ComponentFixture<PokemonCharizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCharizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCharizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
