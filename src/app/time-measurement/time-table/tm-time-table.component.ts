import {Component, OnInit, Input} from '@angular/core';
import {TmTimeMeasurementService} from '../tm-time-measurement.service';

@Component({
  selector: 'tm-time-table',
  templateUrl: './tm-time-table.component.html',
  styleUrls: ['./tm-time-table.component.css']
})
export class TmTimeTableComponent implements OnInit {

  @Input() timeTableEntries = this.timeMeasurementService.timeTableEntries;

  constructor(
    private timeMeasurementService: TmTimeMeasurementService
  ) {
  }

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
