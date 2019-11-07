import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Lib says:</h1>
  <lib-label1 from="app root"></lib-label1>
  <lib-label2></lib-label2>
  <lib-label3></lib-label3>
  <h1>App says:</h1>
  <app-label1 from="app root"></app-label1>
  <app-label2></app-label2>
  <app-label3></app-label3>`
})
export class AppComponent {
}
