import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { PokemonService } from '../../services/pokemon.service';
import { MOCK_POKEMONS } from '../../mock-data';
import { delay, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';
import { MatGridListModule } from '@angular/material/grid-list';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let pokeMonService: PokemonService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent, PokemonCardComponent,
        HttpClientTestingModule, MatGridListModule]
    })
    .compileComponents();
    pokeMonService = TestBed.inject(PokemonService);
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPokemon data on load',(() => {
    spyOn(pokeMonService, 'fetchPokemonData').and.returnValue(of(MOCK_POKEMONS));
    component.ngOnInit();
    expect(component.pokemonData).toEqual(MOCK_POKEMONS.results);
  }));

  it('pokemon cards rendered in UI as data fetched', fakeAsync(() => {
    spyOn(pokeMonService, 'fetchPokemonData').and.callFake(() => of(MOCK_POKEMONS).pipe(delay(100)));
    component.ngOnInit();
      tick(1000);
      const mainPage: HTMLElement  = fixture.nativeElement ;
      fixture.detectChanges();
    const cardElementsCount = mainPage.querySelectorAll('app-pokemon-card').length;
      expect(cardElementsCount).toEqual(10);
  }));
});
