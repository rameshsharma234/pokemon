import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage, CommonModule],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',

})
export class PokemonCardComponent implements OnInit {
  @Input() data!: { name: string; url: string };
  @Input() selectedPokemon!: string;

  imageUrl: string = 'assets/pokemon.png';
  pokemonData:any;


  private pokemonSerice = inject(PokemonService);
  private router = inject(Router);
  ngOnInit(): void {
    this.pokemonSerice.fetchDataFromUrl(this.data?.url).subscribe((result) => {
      console.log('result', result);
      this.pokemonData = result;
      this.imageUrl = result.sprites?.other?.dream_world?.front_default;
    });
  }

  goToDetailView() {
    const pokemonId = this.data?.url?.split('/').slice(-2)?.[0];
    console.log("pokemonId", pokemonId);
    this.router.navigate(['/pokemons/details',pokemonId ], {state: this.pokemonData});
  }
}
