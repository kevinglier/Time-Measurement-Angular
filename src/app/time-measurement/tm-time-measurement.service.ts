import {Injectable} from '@angular/core';
import {TimeTableEntry} from './time-table-entry';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const LOCALSTORAGE_ENTRIES_KEY = '_timeTableEntries';

@Injectable()
export class TmTimeMeasurementService {

  private _timeTableEntries: TimeTableEntry[] = [];
  private timeTableEntriesSubject: BehaviorSubject<TimeTableEntry[]> = new BehaviorSubject<TimeTableEntry[]>([]);
  public timeTableEntries$: Observable<TimeTableEntry[]> = this.timeTableEntriesSubject.asObservable();

  public get timeTableEntries() {
    return this.timeTableEntriesSubject.getValue();
  }

  constructor() {
    this.readFromStorage();

    this.timeTableEntries$.subscribe(entries => {
      this.saveToStorage();
    });
  }

  addTimeTableEntry(entry: TimeTableEntry) {
    this._timeTableEntries.push(entry);
    this.timeTableEntriesSubject.next(this._timeTableEntries);

    return entry;
  }

  removeTimeTableEntry(entry: TimeTableEntry) {
    const index = this._timeTableEntries.indexOf(entry);
    if (index > -1) {
      this._timeTableEntries.splice(index, 1);
      this.timeTableEntriesSubject.next(this._timeTableEntries);

      return true;
    }

    return false;
  }

  editTimeTableEntry(oldEntry: TimeTableEntry, newEntry: TimeTableEntry) {
    const index = this._timeTableEntries.indexOf(oldEntry);
    if (index >= -1) {
      this._timeTableEntries[index] = newEntry;
      this.timeTableEntriesSubject.next(this._timeTableEntries);

      return newEntry;
    }

    return null;
  }

  private saveToStorage() {

    if (this._timeTableEntries && (this._timeTableEntries.length > 0 || localStorage.getItem(LOCALSTORAGE_ENTRIES_KEY))) {
      localStorage.setItem(LOCALSTORAGE_ENTRIES_KEY, JSON.stringify(this._timeTableEntries));
    }
  }

  private readFromStorage() {

    const jsonString = localStorage.getItem(LOCALSTORAGE_ENTRIES_KEY);
    if (jsonString) {

      const entries = JSON.parse(jsonString, (key, value) => {
        switch (key) {
          case 'time':
            return new Date(value);
          case 'duration':
            return +value;
        }
        return value;
      });

      if (entries && entries.length > 0) {
        this._timeTableEntries = entries;
        this.timeTableEntriesSubject.next(this._timeTableEntries);
      }
    }
  }

}
