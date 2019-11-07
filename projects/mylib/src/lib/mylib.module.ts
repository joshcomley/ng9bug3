import { NgModule } from '@angular/core';
import { LibLabel1Component } from './label1.component';
import { LibLabel2Component } from './label2.component';
import { LibLabel3Component } from './label3.component';

@NgModule({
  declarations: [LibLabel1Component, LibLabel2Component, LibLabel3Component],
  imports: [
  ],
  exports: [LibLabel1Component, LibLabel2Component, LibLabel3Component]
})
export class MylibModule { }
