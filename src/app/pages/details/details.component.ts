import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {  ActivatedRoute, RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { PokemonDetailsComponent } from '../../components/pokemon-details/pokemon-details.component';
import { IPokemonAPIResponse, IPokemonDetail } from '../../app.models';
import { EvolutionsComponent } from '../../components/evolutions/evolutions.component';
import { PokemonService } from '../../services/pokemon.service';
import { switchMap,of, forkJoin, Observable } from 'rxjs';
export interface ISpecies {
   species_name: any; min_level: any; url: any;
}
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, MatTabsModule, PokemonDetailsComponent, EvolutionsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private pokeMonService = inject(PokemonService);
  pokemonData: IPokemonDetail = this.location.getState() as IPokemonDetail;
  routeId = this.route.snapshot.paramMap.get('id');
  evolutionSpecies!: ISpecies[];
  evolutionPokemonData!: {name: string;url:string}[];

  // pokemonData! = {};
  ngOnInit(): void {
    console.log(this.pokemonData)
    this.loadSpecies();
  }

  loadSpecies() {
    this.pokeMonService.fetchDataFromUrl(this.pokemonData.species.url).pipe(
      switchMap((response1) => {
        console.log("response1", response1);
        return this.pokeMonService.fetchDataFromUrl(response1?.evolution_chain?.url).pipe(
          switchMap((response2) => {
            console.log("response2", response2);
            let evoChain = [];
            let evoData = response2.chain;
            do {
              let evoDetails = evoData['evolution_details'][0];

              evoChain.push({
                "species_name": evoData.species?.name,
                "min_level": !evoDetails ? 1 : evoDetails.min_level,
                "url":evoData.species?.url,
              });

              evoData = evoData['evolves_to'][0];
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
          return of(evoChain);
        }))
      })).subscribe((response)=> {
        this.evolutionSpecies = response;
        this.loadPokemonListFromSpecies(this.evolutionSpecies);
      })
   }

   loadPokemonListFromSpecies(species:ISpecies[]) {
    let observables$:any= [];
    species.forEach((item)=> {
      observables$.push(this.pokeMonService.fetchDataFromUrl(item.url))
    })
    forkJoin(observables$).subscribe((response:any)=> {
      this.evolutionPokemonData = response.map((item:any)=> item.varieties.find((v:any)=> v.is_default)?.pokemon);
      console.log("evolutionPokemonDaa", this.evolutionPokemonData);
    })
   }
}
