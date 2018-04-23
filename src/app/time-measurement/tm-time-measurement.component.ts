import {Component, OnInit} from '@angular/core';
import {TmTimeMeasurementService} from './tm-time-measurement.service';
import {TimeMeasurementSettings, TimerType, TimerUnit} from './settings';
import {TimeTableEntry} from './time-table-entry';

@Component({
  selector: 'tm-time-measurement',
  templateUrl: './tm-time-measurement.component.html',
  styleUrls: ['./tm-time-measurement.component.css']
})
export class TmTimeMeasurementComponent implements OnInit {

  public settings = <TimeMeasurementSettings>{
    timer: {
      type: TimerType.timer,
      unit: TimerUnit.pomodoro,
      customValue: 15 * 60
    }
  };

  currentTimerEntry = null;

  public get timerStartValue() {

    if (this.settings.timer.unit !== TimerUnit.custom) {
      switch (+this.settings.timer.unit) {
        case TimerUnit.pomodoro:
          return 25 * 60;
        case TimerUnit.hour:
          return 60 * 60;
      }
    }

    return this.settings.timer.customValue || 15 * 60;
  }

  constructor(
    private timeMeasurementService: TmTimeMeasurementService
  ) {
  }

  ngOnInit() {
  }

  timerTick(event) {

  }

  timerStarted(event) {
    this.currentTimerEntry = this.timeMeasurementService.addTimeTableEntry(<TimeTableEntry>{
      time: new Date(),
      duration: null,
      isSystemEntry: true
    });
  }

  timerStopped(event) {
    const newEntry = <TimeTableEntry>{
      time: this.currentTimerEntry.time,
      duration: Math.floor((new Date().valueOf() - this.currentTimerEntry.time.valueOf()) / 1000),
      text: 'Finished',
      isSystemEntry: false
    };

    if (!this.timeMeasurementService.editTimeTableEntry(this.currentTimerEntry, newEntry)) {
      console.error('Something went wrong.');
    }

    this.currentTimerEntry = null;
  }

  timerPaused(event) {

  }

  settingsChanged(event) {

  }
}
