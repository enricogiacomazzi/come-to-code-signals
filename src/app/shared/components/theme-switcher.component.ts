import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'ng-theme-switcher',
  standalone: true,
  imports: [],
  template: `
  <i (click)="dumb()" class="fa fa-question-circle"></i>
  <i (click)="toggle($event)" [class]="ts.iconClass"></i>
  `
})
export class ThemeSwitcherComponent {
  protected ts = inject(ThemeService);

  protected toggle(e: MouseEvent) {
    e.preventDefault();
    this.ts.toggleTheme();
  }

  protected dumb() {
    const theAnswerToLifeTheUniverseAndEverything = 42;
  }
}
