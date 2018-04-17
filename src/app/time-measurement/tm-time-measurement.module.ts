import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TmTimeMeasurementComponent} from './tm-time-measurement.component';
import {TmTimeTableComponent} from './tm-time-table/tm-time-table.component';
import {TmTimerComponent} from './tm-timer/tm-timer.component';
import {TmSettingsComponent} from './tm-settings/tm-settings.component';
import {TmTimeMeasurementService} from './tm-time-measurement.service';
import {TmTimeTableTimePipe} from './tm-time-table/tm-time-table-time.pipe';
import {TmTimeTableDurationPipe} from './tm-time-table/tm-time-table-duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TmTimeMeasurementComponent,
    TmTimerComponent,
    TmTimeTableComponent,
    TmSettingsComponent,
    TmTimeTableTimePipe,
    TmTimeTableDurationPipe
  ],
  providers: [TmTimeMeasurementService],
  exports: [
    TmTimeMeasurementComponent
  ]
})
export class TmTimeMeasurementModule {
}
