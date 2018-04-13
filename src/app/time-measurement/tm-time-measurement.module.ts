import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TmTimeMeasurementComponent } from './tm-time-measurement.component';
import { TmTimeTableComponent } from './time-table/tm-time-table.component';
import { TmTimerComponent } from './timer/tm-timer.component';
import { TmSettingsComponent } from './settings/tm-settings.component';
import { TmTimeMeasurementService } from './tm-time-measurement.service';
import { TmTimeTableTimePipe } from './time-table/tm-time-table-time.pipe';
import { TmTimeTableDurationPipe } from './time-table/tm-time-table-duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
export class TmTimeMeasurementModule { }
