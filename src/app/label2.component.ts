import { Component } from '@angular/core';

@Component({
  selector: 'app-label2',
  template: `<p>App label2 works!</p>
  <app-label1 from="app label2"></app-label1>
  <app-label3></app-label3>`
})
export class AppLabel2Component {

}
