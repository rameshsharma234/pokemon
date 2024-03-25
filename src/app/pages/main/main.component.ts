import { Component, OnInit,inject } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { PokemonService } from '../../services/pokemon.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatGridListModule, InfiniteScrollModule, PokemonCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit {
  private pokeMonService = inject(PokemonService);
  pokemonData:{name: string,url: string}[] = [];
 ngOnInit(): void {
  this.loadPokemon();

 }

 loadPokemon() {
  this.pokeMonService.fetchPokemonData().subscribe((res)=> {
    this.pokemonData = res.results;
  })
 }

}
