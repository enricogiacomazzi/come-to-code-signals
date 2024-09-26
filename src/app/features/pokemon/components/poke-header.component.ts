import { Component, computed, input, output } from '@angular/core';
import { PokeListModel } from '../pokemon-model';

@Component({
  selector: 'ng-poke-header',
  standalone: true,
  imports: [],
  template: `
    <div class="poke-header">
    <i class="fa fa-arrow-circle-left" [class.disabled]="!canPrev()" (click)="gotoPrev()"></i>
    <i class="fa fa-arrow-circle-right" [class.disabled]="!canNext()" (click)="gotoNext()"></i>
    </div>
    <hr/>
  `,
  styles: ``
})
export class PokeHeaderComponent {
  public state = input.required<PokeListModel | undefined>();
  public goto = output<string>();
  protected next = computed(() => this.state()?.next ?? '');
  protected prev = computed(() => this.state()?.previous ?? '');
  protected canNext = computed(() => !!this.next());
  protected canPrev = computed(() => !!this.prev());


  protected gotoPrev() {
    if(this.canPrev()) {
      this.goto.emit(this.prev())
    }
  }

  protected gotoNext() {
    if(this.canNext()) {
      this.goto.emit(this.next())
    }
  }

}
