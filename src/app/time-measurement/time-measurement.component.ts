import { Component, OnInit } from '@angular/core';
import { TimeMeasurementService } from './time-measurement.service';
import { TimeMeasurementSettings, TimerType, TimerUnit } from './settings';

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
      unit: TimerUnit.pomodoro
    }
  };
  
  constructor(
    private timeMeasurementService: TimeMeasurementService
  ) { }

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
