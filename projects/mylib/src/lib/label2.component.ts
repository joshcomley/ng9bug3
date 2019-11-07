import { Component } from '@angular/core';

@Component({
  selector: 'lib-label2',
  template: `<p>Lib label2 works!</p>
  <lib-label1 from="lib label2"></lib-label1>
  <lib-label3></lib-label3>`
})
export class LibLabel2Component  {
}