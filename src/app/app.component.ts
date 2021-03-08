import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {clear, countSelector, decrease, increase} from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  updatedAt?: number;
  count$ = this.store.select(countSelector);
  private counterValue = 0;

  constructor(public store: Store) {
  }

  public get counter(): number {
    return this.counterValue;
  }

  public set counter(newValue: number) {
    this.counterValue = newValue;
    this.updatedAt = Date.now();
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



