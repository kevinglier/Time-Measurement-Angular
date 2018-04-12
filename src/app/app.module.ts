import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TimeMeasurementModule } from './time-measurement/time-measurement.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimeMeasurementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
