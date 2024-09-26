import { Component, input } from '@angular/core';
import { PokemonModel } from '../pokemon-model';
import { PokeListItemComponent } from './poke-list-item.component';

@Component({
  selector: 'ng-poke-list',
  standalone: true,
  imports: [PokeListItemComponent],
  template: `
    <div class="poke-list">
      @for(item of items(); track item.id) {
        <ng-poke-list-item [item]="item" />
      }
    </div>
  `,
  styles: ``
})
export class PokeListComponent {
  items = input.required<PokemonModel[]>();
}
