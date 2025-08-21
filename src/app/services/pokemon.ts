import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, mergeMap } from 'rxjs'; // Importamos novas ferramentas

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private listUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any[]> {
    return this.http.get<any>(this.listUrl).pipe(
      // 1. Pega a resposta inicial e extrai apenas o array 'results'
      map(response => response.results),
      // 2. Para cada item em 'results', faz uma nova chamada de API para a URL de detalhes
      mergeMap((results: any[]) => {
        // Cria um array de chamadas de API (Observables)
        const pokemonObservables = results.map(pokemon => {
          return this.http.get(pokemon.url);
        });
        // 3. Executa todas as chamadas em paralelo e retorna um único Observable com todos os resultados
        return forkJoin(pokemonObservables);
      })
    );
  }
}