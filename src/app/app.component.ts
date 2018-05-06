import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ticks-viewer></ticks-viewer>
    <div>
      <h3>Tick-viewer</h3>
      <button (click)="test()">click me</button>
    </div>
  `
})
export class AppComponent {
  title = 'app';

  test() {
  }
}
