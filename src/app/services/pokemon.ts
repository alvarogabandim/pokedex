import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // AQUI está a propriedade que estava faltando ou com o nome errado
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any[]> {
    // Usando a apiUrl para a lista
    return this.http.get<any>(`${this.apiUrl}?limit=151`).pipe(
      map(response => response.results),
      mergeMap((results: any[]) => {
        const pokemonObservables = results.map(pokemon => {
          return this.http.get(pokemon.url);
        });
        return forkJoin(pokemonObservables);
      })
    );
  }

  getPokemonDetails(id: string): Observable<any> {
    // Usando a mesma apiUrl para os detalhes
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}