import { MylibModule } from 'mylib';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLabel1Component } from './label1.component';
import { AppLabel2Component } from './label2.component';
import { AppLabel3Component } from './label3.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLabel1Component,
    AppLabel2Component,
    AppLabel3Component
  ],
  imports: [
    BrowserModule,
    MylibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
