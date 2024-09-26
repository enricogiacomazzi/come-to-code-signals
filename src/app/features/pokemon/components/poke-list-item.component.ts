import { Component, computed, input } from '@angular/core';
import { PokemonModel } from '../pokemon-model';

@Component({
  selector: 'ng-poke-list-item',
  standalone: true,
  imports: [],
  template: `
    <div class="poke-item">
      <img [src]="item().sprites.front_default"  [alt]="item().name">
      <div class="title">{{item().name}}</div>
      <div class="data">
        @for(type of types(); track type) {
          <span>{{type}}</span>
        }
      </div>
    </div>
  `,
  styles: ``
})
export class PokeListItemComponent {
  item = input.required<PokemonModel>();
  types = computed(() => this.item().types.map(x => x.type.name));
}
