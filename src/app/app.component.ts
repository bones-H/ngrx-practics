import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {clear, countSelector, decrease, increase, updatedAtSelector} from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count$ = this.store.select(countSelector);
  updatedAT$ = this.store.select(updatedAtSelector);

  constructor(public store: Store) {
  }

  increase() {
    this.store.dispatch(increase());
  }

  decrease() {
    this.store.dispatch(decrease());
  }

  clear() {
    this.store.dispatch(clear());
  }
}



