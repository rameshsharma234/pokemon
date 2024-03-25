import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_URL } from '../app.constants';
import { IPokemonAPIResponse } from '../app.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  private http = inject(HttpClient);

  fetchPokemonData(): Observable<IPokemonAPIResponse> {
     return this.http.get<IPokemonAPIResponse>(API_URL.POKEMON_LIST);
  }

  fetchDataFromUrl(url:string): Observable<any> {
    return this.http.get<any>(url);
 }
}
