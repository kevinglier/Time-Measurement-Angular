import { Component, OnInit } from '@angular/core';
import { TimeMeasurementService } from '../time-measurement.service';

@Component({
  selector: 'time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  constructor(
    private timeMeasurementService: TimeMeasurementService
  ) { }

  ngOnInit() {
  }

  handleAddNoteButtonClick(event) {
    
  }

  handleEditNoteButtonClick(event) {

  }

  handleRemoveNoteButtonClick(event) {


  }


  add(entry) {
    this.timeMeasurementService.addTimeTableEntry(entry);
  }
  remove(entry) {
    this.timeMeasurementService.removeTimeTableEntry(entry);
  }
  edit(oldEntry, newEntry) {
    this.timeMeasurementService.editTimeTableEntry(oldEntry, newEntry);
  }
}
