import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ActivatedRoute, RouterModule,  } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { routes } from '../../app.routes';
import { MOCK_POKEMON_DETAIL } from '../../mock-data';
import { IPokemonDetail } from '../../app.models';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { MatTabsModule } from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
@Component({standalone: true, selector: 'app-evolutions', template: ''})
class PokemonDetailsComponent {}
@Component({standalone: true, selector: 'app-pokemon-details', template: ''})
class EvolutionsComponent {}

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let pokeMonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsComponent, RouterModule.forRoot(routes), HttpClientTestingModule, EvolutionsComponent, PokemonDetailsComponent, MatTabsModule, NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],

    })
    .compileComponents();
    pokeMonService = TestBed.inject(PokemonService);
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    component.pokemonData = MOCK_POKEMON_DETAIL as unknown as IPokemonDetail;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
