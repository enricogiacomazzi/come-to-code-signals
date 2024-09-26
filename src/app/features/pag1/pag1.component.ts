import { Component } from '@angular/core';
import { CounterModel } from '../../models/counter.model';
import { Counter1Component } from "./components/counter1.component";
import { Counter2Component } from './components/counter2.component';

@Component({
  selector: 'ng-pag1',
  standalone: true,
  imports: [Counter1Component, Counter2Component],
  template: `
  <div class="jumbotron">
    <ng-counter1 [counter]="counter" (increment)="increment()" />
    <ng-counter2 [counter]="counter" />
  </div>

  `,
  styles: ``
})
export class Pag1Component {
  protected counter: CounterModel = { value: 1 }; 

  protected increment() {
    this.counter.value++;
  }
}
