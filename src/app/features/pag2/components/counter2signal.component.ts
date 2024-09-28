import { ChangeDetectionStrategy, Component, computed, inject, input, Input } from '@angular/core';
import { CounterModel } from '../../../models/counter.model';
import { RomansPipe } from '../../../shared/pipes/romans.pipe';
import { ThemeService } from '../../../core/services/theme.service';
import * as romans from 'romans';

@Component({
  selector: 'ng-counter2-signal',
  standalone: true,
  imports: [RomansPipe],
  template: `
    <div class="box" [class.dark]="ts.isDark">
      @if(isValid()) {
        <h1>{{romansValue()}}</h1>
      }

      {{render()}}
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Counter2SignalComponent {
  protected ts = inject(ThemeService);
  public counter = input.required<CounterModel>();
  protected value = computed(() => this.counter().value);
  protected isValid = computed(() => this.value() > 0);
  protected romansValue = computed(() => romans.romanize(this.value()));


  protected render() {
    console.log('counter 2 render');
    return '';
  }
}
