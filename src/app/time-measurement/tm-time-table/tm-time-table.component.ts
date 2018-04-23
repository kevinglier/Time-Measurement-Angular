import {Component, OnInit} from '@angular/core';
import {TmTimeMeasurementService} from '../tm-time-measurement.service';
import {TimeTableEntry} from '../time-table-entry';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
    selector: 'tm-time-table',
    templateUrl: './tm-time-table.component.html',
    styleUrls: ['./tm-time-table.component.css']
})
export class TmTimeTableComponent implements OnInit {

    timeTableEntries = this.timeMeasurementService.timeTableEntries$;

    formNewEntry: FormGroup;

    constructor(
        private timeMeasurementService: TmTimeMeasurementService,
        private formBuilder: FormBuilder
    ) {
        this.resetNewEntry();
    }

    ngOnInit() {
        this.formNewEntry = this.formBuilder.group({
            time: new FormControl(new Date().getHours() + ':' + new Date().getMinutes(), [Validators.required]),
            duration: new FormControl('00:15', [Validators.required]),
            text: new FormControl('', [Validators.required])
        });
    }

    handleAddNoteButtonClick(event) {

        let timeSeconds = mapTimeToSeconds(this.formNewEntry.get('time').value);
        let durationSeconds = mapTimeToSeconds(this.formNewEntry.get('duration').value);

        let newEntry: TimeTableEntry = {
            time: timeSeconds,
            duration: durationSeconds,
            text: this.formNewEntry.get('text').value
        };

        this.add(newEntry);
    }

    handleEditNoteButtonClick(event) {

    }

    handleRemoveNoteButtonClick(event) {


    }

    private resetNewEntry() {
        this.ngOnInit();
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


function mapTimeToSeconds(v) {
    if (v) {

        let splitted = v.split(':');
        if (!splitted || splitted.length != 2)
            return null;

        return (splitted[0] * 60) + splitted[1];
    }

    return null;
}