import { Component, computed, inject, signal } from '@angular/core';
import { PokeHeaderComponent } from "./components/poke-header.component";
import { PokeListComponent } from "./components/poke-list.component";
import { PokemonService } from './pokemon.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { concat, of, switchMap } from 'rxjs';
import { emptyList } from './pokemon-model';

@Component({
  selector: 'ng-pokemon',
  standalone: true,
  imports: [PokeHeaderComponent, PokeListComponent],
  template: `
      <ng-poke-header [state]="data()" (goto)="url.set($event)" />
      <ng-poke-list [items]="items()" />
  `,
  styles: ``
})
export class PokemonComponent {
  private ps = inject(PokemonService);
  protected url = signal<string | undefined>(undefined);

  protected data = toSignal(toObservable(this.url).pipe(
    switchMap(u => concat(
      of(emptyList()),
      this.ps.GetPokemonList(u)
    ))
  ));

  protected items = computed(() => this.data()?.results ?? []);
}
