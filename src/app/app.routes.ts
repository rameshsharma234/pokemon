import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { DetailsComponent } from './pages/details/details.component';

export const routes: Routes = [
  {
    path: 'pokemons',
    component:MainComponent
  },
  {
    path: 'pokemons/details/:id',
    component: DetailsComponent
  },
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full'
  }
];
