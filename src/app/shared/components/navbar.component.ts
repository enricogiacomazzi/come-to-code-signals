import { Component, inject } from '@angular/core';
import { ThemeSwitcherComponent } from "./theme-switcher.component";
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'ng-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  template: `
    <div class="navbar">
      <h2>Come To Code Signal Demo</h2>
      <ng-theme-switcher />
    </div>
  `,
  styles: ``
})
export class NavbarComponent { }
