import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TimerType, TimerUnit } from '../settings';


export enum TimerState {
  stopped,
  paused,
  running
}

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges {

  @Output() timerEnded = new EventEmitter<any>();
  @Output() timerStartedByUser = new EventEmitter<any>();
  @Output() timerStoppedByUser = new EventEmitter<any>();
  @Output() timerPausedByUser = new EventEmitter<any>();
  @Output() timerTick = new EventEmitter<any>();


  private _type: TimerType;
  @Input() set type(value) {
    this._type = value;
    this.stop();
  }
  get type() {
    return this._type;
  }

  private _startValue = 0;
  @Input() set startValue(value) {
    this._startValue = value;
    this.remaining = value;
    this.updateRemainingTimeString();
    this.stop();
  }
  get startValue() {
    return this._startValue;
  }
  
  private _remaining = 0;
  set remaining(value) {
    this._remaining = value;
    this.updateRemainingTimeString();
  }
  get remaining() {
    return this._remaining;
  }

  remainingTimeString = new BehaviorSubject<string>('00:00');

  state: TimerState = TimerState.stopped;
  

  private _timerHandle = null;
  constructor() { }

  ngOnInit() {
    this.startValue = 25 * 60;
    this.remaining = this.startValue;
    this.type = TimerType.timer;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['startValue'] || changes['type']) {
      this.stop();
    }
  }

  handleStartClick(event: Event) {
    if (this.state !== TimerState.running) {
      this.resume();
      this.timerStartedByUser.emit(null);
    }
  }
  
  handlePauseClick(event: Event) {
    if (this.state === TimerState.running) {
      this.pause();
      this.timerPausedByUser.emit(null);
    }
  }
  
  handleStopClick(event: Event) {
    this.stop();
    this.timerStoppedByUser.emit(null);
  }

  resume() {
    this.state = TimerState.running;

    this._timerHandle = window.setInterval(() => { this.tick(); }, 1000);
  }

  pause() {
    this.state = TimerState.paused;

    window.clearInterval(this._timerHandle);
  }

  stop() {
    this.state = TimerState.stopped;
    this.remaining = this.type == TimerType.timer ? this.startValue : 0;
    
    this.updateRemainingTimeString();

    window.clearInterval(this._timerHandle);
  }

  tick() {
    switch(+this.type) {
      default:
      case TimerType.timer:
        this.remaining -= 1;
        break;
      case TimerType.counter:
        this.remaining += 1;
        break;
    }

    this.updateRemainingTimeString();

    this.timerTick.emit(null);
  }

  private updateRemainingTimeString() {
    let minutes = parseInt((this.remaining / 60) + '');
    let seconds = parseInt((this.remaining % 60) + '');

    this.remainingTimeString.next(
      (minutes < 10 ? '0' + minutes : minutes) +
      ':' +
      (seconds < 10 ? '0' + seconds : seconds)
    );
  }
}
