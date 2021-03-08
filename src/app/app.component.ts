import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  updatedAt?: number;

  private counterValue = 0;

  public get counter(): number {
    return this.counterValue;
  }

  public set counter(newValue: number) {
    this.counterValue = newValue;
    this.updatedAt = Date.now();
  }

  increase() {
    this.counter = this.counterValue + 1;
  }

  decrease() {
    this.counter = this.counterValue - 1;
  }

  clear() {
    this.counter = 0;
  }
}



