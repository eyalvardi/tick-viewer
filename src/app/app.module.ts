import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TicksViewerModule} from 'tick-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TicksViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
