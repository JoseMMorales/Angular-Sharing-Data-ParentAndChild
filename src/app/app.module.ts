import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BeveragesComponent } from './beverages/beverages.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BeveragesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
