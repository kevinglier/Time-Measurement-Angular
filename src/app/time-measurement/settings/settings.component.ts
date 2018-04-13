import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {TimerType, TimerUnit, TimeMeasurementSettings} from '../settings';

@Component({
    selector: 'settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnChanges {

    timerTypeOptions = [
        {caption: 'Timer', value: TimerType.timer},
        {caption: 'Counter', value: TimerType.counter},
    ]
    timerUnitOptions = [
        {caption: 'Pomodoro', value: TimerUnit.pomodoro},
        {caption: 'Hour', value: TimerUnit.hour},
        {caption: 'Custom', value: TimerUnit.custom},
    ]
    timerCustomValueMinutesValues = (() => {
        var x = [];
        for (var i = 0; i <= 120; i += 5) x.push(i);
        return x;
    })();
    timerCustomValueSecondsValues = (() => {
        var x = [];
        for (var i = 0; i <= 45; i += 15) x.push(i);
        return x;
    })();


    @Input() settings;
    @Output() settingsChange = new EventEmitter<TimeMeasurementSettings>();

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['settings']) {
            console.log('changes', changes);
            var m = this.settings.timer.customValue ? parseInt((this.settings.timer.customValue / 60) + '') : 15;
            var s = this.settings.timer.customValue ? this.settings.timer.customValue % 60 : 0;
            console.log('m', m);
            console.log('s', s);
            this.timerCustomValueMinutes = m;
            this.timerCustomValueSeconds = s;
        }
    }

    timerTypeChange(type) {
        this.settings.timer.type = type;
        this.settingsChange.emit(this.settings);
    }

    timerUnitChange(type) {
        this.settings.timer.unit = type;
        this.settingsChange.emit(this.settings);
    }

    private _timerCustomValueMinutes = 15;
    get timerCustomValueMinutes() {
        return this._timerCustomValueMinutes;
    }

    set timerCustomValueMinutes(minutes) {
        console.log('MIN', minutes, this.timerCustomValueMinutes);
        this._timerCustomValueMinutes = minutes;
        this.settings.timer.customValue = (this.timerCustomValueMinutes * 60) + this.timerCustomValueSeconds;
        this.settingsChange.emit(this.settings);
    }


    private _timerCustomValueSeconds = 0;
    get timerCustomValueSeconds() {
        return this._timerCustomValueSeconds;
    }

    set timerCustomValueSeconds(seconds) {
        this._timerCustomValueSeconds = seconds;
        this.settings.timer.customValue = (this.timerCustomValueMinutes * 60) + this.timerCustomValueSeconds;
        this.settingsChange.emit(this.settings);
    }

}
