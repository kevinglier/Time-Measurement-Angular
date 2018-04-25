import { Component, OnInit } from '@angular/core';
import { TmTimeMeasurementService } from './tm-time-measurement.service';
import { TimeMeasurementSettings, TimerType, TimerUnit } from './settings';
import { TimeTableEntry } from './time-table-entry';

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
  isTimerPaused = true;

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

    // Display the duration of the active time table entry
    this.currentTimerEntry.duration = Math.round((+new Date() - +this.currentTimerEntry.time) / 1000);

    // Save every 10 seconds
    if (this.currentTimerEntry.duration % 10 === 0) {
      this.timeMeasurementService.editTimeTableEntry(this.currentTimerEntry, this.currentTimerEntry);
    }
  }

  timerStarted(event) {

    if (!this.isTimerPaused || !this.currentTimerEntry) {

      this.currentTimerEntry = this.timeMeasurementService.addTimeTableEntry(<TimeTableEntry>{
        time: new Date(),
        duration: null,
        isSystemEntry: true
      });
    }

    this.isTimerPaused = false;
  }

  timerStopped(event) {
    const newEntry = <TimeTableEntry>{
      time: this.currentTimerEntry.time,
      duration: Math.floor((new Date().valueOf() - this.currentTimerEntry.time.valueOf()) / 1000),
      text: this.currentTimerEntry.text ? this.currentTimerEntry.text : 'Finished',
      isSystemEntry: false
    };

    if (!this.timeMeasurementService.editTimeTableEntry(this.currentTimerEntry, newEntry)) {
      console.error('Something went wrong.');
    }

    this.currentTimerEntry = null;
  }

  timerPaused(event) {
    this.isTimerPaused = true;
  }

  settingsChanged(event) {

  }
}
