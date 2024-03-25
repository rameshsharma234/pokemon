import { Component, Input } from '@angular/core';
import { IPokemonDetail } from '../../app.models';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule,MatCardModule, NgOptimizedImage],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {
@Input() data!: IPokemonDetail;
}
