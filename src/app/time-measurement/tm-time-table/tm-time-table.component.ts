import { Component, Input, OnInit } from '@angular/core';
import { TmTimeMeasurementService } from '../tm-time-measurement.service';
import { TimeTableEntry } from '../time-table-entry';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'tm-time-table',
  templateUrl: './tm-time-table.component.html',
  styleUrls: ['./tm-time-table.component.css']
})
export class TmTimeTableComponent implements OnInit {

  timeTableEntries = this.timeMeasurementService.timeTableEntries$;

  formNewEntry: FormGroup;
  formEditEntry: FormGroup;

  editEntry: TimeTableEntry;

  constructor(
    private timeMeasurementService: TmTimeMeasurementService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.resetNewForm();
    this.resetEditForm();
  }

  /**
   * ClickEvent-Handler for the Add-Button
   * @param {Event} event
   */
  handleAddNoteButtonClick(event: Event): void {

    const entry = this.getEntryFromForm(this.formNewEntry);

    if (entry) {
      this.add(entry);
    }
  }

  /**
   * ClickEvent-Handler for the Edit-Save-Button
   * @param {Event} event
   */
  handleSaveNoteButtonClick(event: Event): void {
    if (!this.editEntry) {
      return;
    }

    const editedEntry = this.getEntryFromForm(this.formEditEntry, this.editEntry);

    if (editedEntry) {
      this.edit(this.editEntry, editedEntry);
    }
  }

  /**
   * ClickEvent-Handler for the Edit-Button
   * @param {Event} event
   * @param {TimeTableEntry} entry
   */
  handleEditNoteButtonClick(event: Event, entry: TimeTableEntry): void {
    this.editEntry = this.editEntry === entry ? null : entry;
    this.resetEditForm();
  }

  /**
   * ClickEvent-Handler for the Remove-Button
   * @param {Event} event
   * @param {TimeTableEntry} entry
   */
  handleRemoveNoteButtonClick(event: Event, entry: TimeTableEntry): void {

    if (confirm('Do you really want to delete this entry?')) {
      this.remove(entry);
    }
  }

  /**
   * Created an new time table entry from an FormGroup.
   * @param {FormGroup} form The FormGroup
   * @param {TimeTableEntry} entry An entry that would be edited.
   * @returns {TimeTableEntry}
   */
  private getEntryFromForm(form: FormGroup, entry?: TimeTableEntry): TimeTableEntry {

    entry = entry ? entry : new TimeTableEntry();

    if (form == this.formNewEntry || (form == this.formEditEntry && !entry.isSystemEntry)) {
      const time = mapTimeToArray(form.get('time').value);
      const duration = +form.get('duration').value;

      const timeDate = new Date();
      timeDate.setSeconds(0);
      timeDate.setHours(time[0]);
      timeDate.setMinutes(time[1]);


      entry.time = timeDate;
      entry.duration = Math.round(duration * 60);
    }
    entry.text = form.get('text').value;

    return entry;
  }

  /**
   * Resets the FormGroup for new entry
   */
  private resetNewForm(): void {
    this.formNewEntry = this.formBuilder.group({
      time: new FormControl(
        ('0' + new Date().getHours()).slice(-2) + ':' + ('0' + new Date().getMinutes()).slice(-2),
        [Validators.required]
      ),
      duration: new FormControl(15, [Validators.required]),
      text: new FormControl('', [Validators.required])
    });
  }

  /**
   * Resets the FormGroup for editible entry
   */
  private resetEditForm(): void {
    if (!this.editEntry) {
      this.formEditEntry = this.formBuilder.group({});
      this.formEditEntry.disable();
      return;
    }

    let formControls = {};

    if (!this.editEntry.isSystemEntry) {
      formControls['time'] = new FormControl(
        ('0' + this.editEntry.time.getHours()).slice(-2) + ':' + ('0' + this.editEntry.time.getMinutes()).slice(-2),
        [Validators.required]
      );
      formControls['duration'] = new FormControl(
        Math.floor(this.editEntry.duration / 60),
        [Validators.required, Validators.pattern('[0-9]+')]
      );
    }
    formControls['text'] = new FormControl(this.editEntry.text, [Validators.required]);

    this.formEditEntry = this.formBuilder.group(formControls);
    this.formEditEntry.enable();
  }


  private add(entry: TimeTableEntry): void {
    this.timeMeasurementService.addTimeTableEntry(entry);
    this.resetNewForm();
  }

  private remove(entry: TimeTableEntry): void {
    this.timeMeasurementService.removeTimeTableEntry(entry);
  }

  private edit(oldEntry: TimeTableEntry, newEntry: TimeTableEntry): void {
    this.timeMeasurementService.editTimeTableEntry(oldEntry, newEntry);
    this.editEntry = null;
    this.resetEditForm();
  }
}

/**
 * Maps a time string(HH:SS) to an array with to number-elements.
 * @param timeString Time-String with the format HH:SS
 * @returns {number[]} Array with two elements, first Minutes, second Seconds
 */
function mapTimeToArray(timeString): number[] {
  if (timeString) {

    const splitted: number[] = timeString.split(':');
    if (!splitted || splitted.length !== 2) {
      return null;
    }

    return splitted;
  }

  return null;
}
