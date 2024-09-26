import { ChangeDetectionStrategy, Component, computed, EventEmitter, inject, input, Input, output, Output } from '@angular/core';
import { CounterModel } from '../../../models/counter.model';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'ng-counter1-signal',
  standalone: true,
  imports: [],
  template: `
    <div class="box" [class.dark]="ts.isDark" (click)="clickHandler($event)">
      <h1>{{value()}}</h1>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Counter1SignalComponent {
  public counter = input.required<CounterModel>();
  public increment = output();
  protected value = computed(() => this.counter().value);
  protected ts = inject(ThemeService);

  protected clickHandler(e: MouseEvent) {
    e.preventDefault();
    this.increment.emit();
  }
}
