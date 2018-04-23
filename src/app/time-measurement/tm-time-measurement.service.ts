import {Injectable} from '@angular/core';
import {TimeTableEntry} from './time-table-entry';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class TmTimeMeasurementService {

    private _timeTableEntries = [];
    private timeTableEntriesSubject: BehaviorSubject<TimeTableEntry[]> = new BehaviorSubject<TimeTableEntry[]>([]);
    public timeTableEntries$: Observable<TimeTableEntry[]> = this.timeTableEntriesSubject.asObservable();

    public get timeTableEntries() {
        return this.timeTableEntriesSubject.getValue();
    }

    constructor() {
    }

    addTimeTableEntry(entry: TimeTableEntry) {
        this._timeTableEntries.push(entry);
        this.timeTableEntriesSubject.next(this._timeTableEntries);

        return entry;
    }

    removeTimeTableEntry(entry: TimeTableEntry) {
        const index = this._timeTableEntries.indexOf(entry);
        if (index > 0) {
            this._timeTableEntries = this._timeTableEntries.slice(index, 1);
            this.timeTableEntriesSubject.next(this._timeTableEntries);

            return true;
        }

        return false;
    }

    editTimeTableEntry(oldEntry: TimeTableEntry, newEntry: TimeTableEntry) {
        const index = this._timeTableEntries.indexOf(oldEntry);
        if (index >= 0) {
            this._timeTableEntries[index] = newEntry;
            this.timeTableEntriesSubject.next(this._timeTableEntries);

            return newEntry;
        }

        return null;
    }

}
