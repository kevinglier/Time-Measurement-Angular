import {Component, OnInit, Input} from '@angular/core';
import {TmTimeMeasurementService} from '../tm-time-measurement.service';
import {TimeTableEntry} from '../time-table-entry';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'tm-time-table',
  templateUrl: './tm-time-table.component.html',
  styleUrls: ['./tm-time-table.component.css']
})
export class TmTimeTableComponent implements OnInit {

  @Input() timeTableEntries = this.timeMeasurementService.timeTableEntries$;

  newEntry: TimeTableEntry;
  formNewEntry: FormGroup;

  constructor(
    private timeMeasurementService: TmTimeMeasurementService,
    private formBuilder: FormBuilder
  ) {
    this.resetNewEntry();
  }

  ngOnInit() {
    this.formNewEntry = this.formBuilder.group({
      time: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required])
    });
  }

  handleAddNoteButtonClick(event) {

  }

  handleEditNoteButtonClick(event) {

  }

  handleRemoveNoteButtonClick(event) {


  }

  private resetNewEntry() {
    const newEntry = new TimeTableEntry();
    newEntry.time = new Date();
    newEntry.duration = 2;
    newEntry.text = '';

    this.newEntry = newEntry;
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
