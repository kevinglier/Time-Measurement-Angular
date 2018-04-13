import {Component, OnInit} from '@angular/core';
import {TimeMeasurementService} from './time-measurement.service';
import {TimeMeasurementSettings, TimerType, TimerUnit} from './settings';

@Component({
    selector: 'time-measurement',
    templateUrl: './time-measurement.component.html',
    styleUrls: ['./time-measurement.component.css']
})
export class TimeMeasurementComponent implements OnInit {

    public timeTableEntries = this.timeMeasurementService.timeTableEntries;

    public settings = <TimeMeasurementSettings>{
        timer: {
            type: TimerType.timer,
            unit: TimerUnit.pomodoro,
            customValue: 15 * 60
        }
    };

    public get timerStartValue() {
        console.log(this.settings);
        if (this.settings.timer.unit != TimerUnit.custom) {
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
        private timeMeasurementService: TimeMeasurementService
    ) {
    }

    ngOnInit() {
    }

    timerTick(event) {

    }

    timerStarted(event) {

    }

    timerStopped(event) {

    }

    timerPaused(event) {

    }

    settingsChanged(event) {

    }
}
