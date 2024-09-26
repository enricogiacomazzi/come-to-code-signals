import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private dark = false;
  public get isDark() {
    return this.dark;
  }

  public get theme() {
    return this.dark ? 'dark' : 'light';
  }

  public get iconClass() {
    return 'fa ' + (this.dark ? 'fa-moon-o' : 'fa-sun-o');
  }

  public toggleTheme() {
    this.dark = !this.dark;
  }
}
