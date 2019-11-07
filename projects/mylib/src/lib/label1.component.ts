import { Component, Input } from '@angular/core';
import { LibLabel2Component } from './label2.component';

@Component({
  selector: 'lib-label1',
  template: `<p>Lib label1 works (from: {{from}})!</p>`
})
export class LibLabel1Component {
  @Input() public from: string = "";
}
