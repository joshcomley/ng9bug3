import { Component, Input } from '@angular/core';
import { AppLabel2Component } from './label2.component';

@Component({
  selector: 'app-label1',
  template: `<p>App label1 works (from: {{from}})!</p>`
})
export class AppLabel1Component {
  @Input() public from: string = "";
}