import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { PokemonCardComponent } from './pokemon-card.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientTestingModule, provideHttpClientTesting } from '@angular/common/http/testing';
import { MOCK_POKEMONS } from '../../mock-data';
import { Router, provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { provideHttpClient } from '@angular/common/http';
import {RouterTestingHarness} from '@angular/router/testing';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let harness: RouterTestingHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent,  MatCardModule, NgOptimizedImage, ],
      providers: [
        provideRouter(routes),
      provideHttpClient(),
      provideHttpClientTesting()]
    })
    .compileComponents().then(async () => {
      harness = await RouterTestingHarness.create();
    });

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.data = MOCK_POKEMONS.results[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test click on pokemon', async () => {
    const spy = spyOn(component, 'goToDetailView').and.callThrough();
     fixture.nativeElement.querySelector('mat-card').click();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should test navigate on click', async () => {
    const router = TestBed.inject(Router);
    const spyNavigate = spyOn(router, 'navigate').and.stub();
     fixture.nativeElement.querySelector('mat-card').click();
    fixture.detectChanges();
    // expecting to navigate to id of the component's first hero
    const pokemonId = component.data?.url?.split('/').slice(-2)?.[0];
    expect(spyNavigate.calls.first().args[0]?.[0]).toContain( '/pokemons/details');
    expect(spyNavigate.calls.first().args[0]?.[1]).toContain(pokemonId);
  });
});
