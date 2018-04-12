import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeMeasurementComponent } from './time-measurement.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { TimerComponent } from './timer/timer.component';
import { SettingsComponent } from './settings/settings.component';
import { TimeMeasurementService } from './time-measurement.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    TimeMeasurementComponent,
    TimerComponent,
    TimeTableComponent,
    SettingsComponent
  ],
  providers: [TimeMeasurementService],
  exports: [
    TimeMeasurementComponent
  ]
})
export class TimeMeasurementModule { }
