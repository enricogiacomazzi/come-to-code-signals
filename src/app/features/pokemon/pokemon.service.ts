import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, filter, from, map, mergeMap, Observable, of, switchMap, toArray } from 'rxjs';
import { PokeListModel, PokemonModel } from './pokemon-model';

interface List {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<ListItem>
}

interface ListItem {
  name: string;
  url: string;
}


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon';

  public GetPokemonList(url?: string): Observable<PokeListModel> {
    return this.http.get<List>(url ?? this.baseUrl).pipe(
      switchMap(x => this.mapPokemon(x.results).pipe(
        map(results => ({...x, results})))
      )
    );
  }

  private mapPokemon(items: ListItem[]): Observable<PokemonModel[]> {
    return from(items).pipe(
      mergeMap(({url}) => this.getPokemonByUrl(url)),
      filter(x => x !== null),
      toArray()
    );
  }

  private getPokemonByUrl(url: string): Observable<PokemonModel | null> {
    return this.http.get<PokemonModel>(url).pipe(catchError(() => of(null)));
  }
  
}
