import { Component, inject } from '@angular/core';
import { ThemeSwitcherComponent } from "./theme-switcher.component";
import { ThemeService } from '../../core/services/theme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ng-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent],
  template: `
    <div class="navbar">
      <h2 (click)="next()">Come To Code Signal Demo</h2>
      <ng-theme-switcher />
    </div>
  `,
  styles: ``
})
export class NavbarComponent {
  private router = inject(Router);
  next() {
    const val = +this.router.url.substring(1);
    this.router.navigateByUrl(`/${val + 1}`);
    console.log(val);
  } 
}
