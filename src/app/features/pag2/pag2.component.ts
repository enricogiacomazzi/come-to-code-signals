import { Component, signal, effect, afterNextRender } from '@angular/core';
import { CounterModel } from '../../models/counter.model';
import { Counter1SignalComponent } from "./components/counter1signal.component";
import { Counter2SignalComponent } from './components/counter2signal.component';

@Component({
  selector: 'ng-pag2',
  standalone: true,
  imports: [Counter1SignalComponent, Counter2SignalComponent],
  template: `
  <div class="jumbotron">
    <ng-counter1-signal [counter]="counter()" (increment)="increment()" />
    <ng-counter2-signal [counter]="counter()" />
  </div>

  `,
  styles: ``
})
export class Pag2Component {
  protected counter = signal<CounterModel>( { value: 5 });

  protected increment() {
    this.counter.update(({value}) => ({value: value + 1}));
  }
}
