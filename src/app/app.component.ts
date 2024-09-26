import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'ng-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <div class="container" [class.dark]="ts.isDark">
      <ng-navbar />

      <router-outlet />
    </div>
  `,
  styles: ``
})
export class AppComponent {
  protected ts = inject(ThemeService);
}
