import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'ng-pag3',
  standalone: true,
  imports: [AsyncPipe, ReactiveFormsModule],
  template: `
  <div class="users">
    <div class="searchbar">
        <div class="form__group field">
          <input type="text" class="form__field" placeholder="Name" name="name" [formControl]="ctrl" />
          <label for="name" class="form__label">Search</label>
        </div>
    </div>
    <ul>
      @for(user of users(); track user.id) {
        <li>{{user.name}}</li>
      }
    </ul>
  </div>
  `
})
export class Pag3Component {
  private http = inject(HttpClient);
  protected ctrl = new FormControl<string>('');

  // private url = 'https://jsonplaceholder.typicode.com/users';
  private url = 'http://localhost:3000/users';

  protected users = toSignal(this.ctrl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    startWith(this.ctrl.value),
    map(value => !value ? '' : `?name_like=${value}`),
    switchMap(query => this.http.get<User[]>(this.url + query))
  ));
}
