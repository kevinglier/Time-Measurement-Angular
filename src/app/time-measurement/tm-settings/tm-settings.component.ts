import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {TimerType, TimerUnit, TimeMeasurementSettings} from '../settings';

@Component({
  selector: 'tm-settings',
  templateUrl: './tm-settings.component.html',
  styleUrls: ['./tm-settings.component.css']
})
export class TmSettingsComponent implements OnInit, OnChanges {

  private _timerCustomValueMinutes = 15;
  private _timerCustomValueSeconds = 0;

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
    const x = [];
    for (let i = 0; i <= 120; i += 5) {
      x.push(i);
    }
    return x;
  })();
  timerCustomValueSecondsValues = (() => {
    const x = [];
    for (let i = 0; i <= 45; i += 15) {
      x.push(i);
    }
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
      const m = this.settings.timer.customValue ? parseInt((this.settings.timer.customValue / 60) + '', 10) : 15;
      const s = this.settings.timer.customValue ? this.settings.timer.customValue % 60 : 0;
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


  get timerCustomValueMinutes() {
    return this._timerCustomValueMinutes;
  }

  set timerCustomValueMinutes(minutes) {
    this._timerCustomValueMinutes = minutes;
    this.settings.timer.customValue = (this.timerCustomValueMinutes * 60) + this.timerCustomValueSeconds;
    this.settingsChange.emit(this.settings);
  }

  get timerCustomValueSeconds() {
    return this._timerCustomValueSeconds;
  }

  set timerCustomValueSeconds(seconds) {
    this._timerCustomValueSeconds = seconds;
    this.settings.timer.customValue = (this.timerCustomValueMinutes * 60) + this.timerCustomValueSeconds;
    this.settingsChange.emit(this.settings);
  }

}
