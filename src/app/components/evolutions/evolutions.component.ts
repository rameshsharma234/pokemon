import {  Component, Input } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-evolutions',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './evolutions.component.html',
  styleUrl: './evolutions.component.scss',
})
export class EvolutionsComponent {
@Input() evolutionData!: any;
@Input() selectedPokemonName!: string;

ngOnInit(): void {}

}
