import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CounterModel } from '../../../models/counter.model';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'ng-counter1',
  standalone: true,
  imports: [],
  template: `
    <div class="box" [class.dark]="ts.isDark" (click)="clickHandler($event)">
      <h1>{{counter.value}}</h1>
    </div>
  `,
  styles: ``
})
export class Counter1Component {
  @Input({required: true}) counter!: CounterModel;
  @Output() increment = new EventEmitter();
  protected ts = inject(ThemeService);

  protected clickHandler(e: MouseEvent) {
    e.preventDefault();
    this.increment.emit();
  }
}
