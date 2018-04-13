import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TmTimeMeasurementModule } from './time-measurement/tm-time-measurement.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TmTimeMeasurementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
