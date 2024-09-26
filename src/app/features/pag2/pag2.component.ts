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
    this.counter.set({value: this.counter().value + 1});
  }

  constructor() {
    // NOTE: effect outside constructor e/o injector
    effect(() => {
      console.log(`counter changed: ${this.counter().value}`);
    });

    afterNextRender(() => {
      console.log('boh!');
    });
  }

  private eff = effect(() => {
    console.log(`counter changed 2: ${this.counter().value}`);
  });

  // protected increment() {
  //   this.counter.update(x => ({value: x.value + 1}));
  // }

  // protected increment() {
  //   for(let i = 0; i < 10; i++) {
  //     this.counter.update(x => ({value: x.value + 1}));
  //   }
  // }



}
