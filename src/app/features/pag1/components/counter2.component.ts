import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CounterModel } from '../../../models/counter.model';
import { RomansPipe } from '../../../shared/pipes/romans.pipe';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'ng-counter2',
  standalone: true,
  imports: [RomansPipe],
  template: `
    <div class="box" [class.dark]="ts.isDark">
      <h1>{{counter.value | romans}}</h1>
      {{render()}}
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class Counter2Component {
  @Input({required: true}) counter!: CounterModel;
  protected ts = inject(ThemeService);

  protected render() {
    console.log('counter 2 render');
    return '';
  }
}
