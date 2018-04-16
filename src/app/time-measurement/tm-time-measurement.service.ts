import {Injectable} from '@angular/core';
import {TimeTableEntry} from './time-table-entry';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class TmTimeMeasurementService {

  private timeTableEntriesSubject: BehaviorSubject<TimeTableEntry[]> = new BehaviorSubject<TimeTableEntry[]>([]);
  public timeTableEntries$: Observable<TimeTableEntry[]> = this.timeTableEntriesSubject.asObservable();
  public get timeTableEntries() {
    return this.timeTableEntriesSubject.getValue();
  }

  constructor() {
  }

  addTimeTableEntry(entry: TimeTableEntry) {
    const entries = this.timeTableEntriesSubject.getValue();
    entries.push(entry);
    this.timeTableEntriesSubject.next(entries);

    return entry;
  }

  removeTimeTableEntry(entry: TimeTableEntry) {
    const index = this.timeTableEntriesSubject.getValue().indexOf(entry);
    if (index > 0) {
      const entries = this.timeTableEntriesSubject.getValue().slice(index, 1);
      this.timeTableEntriesSubject.next(entries);

      return true;
    }

    return false;
  }

  editTimeTableEntry(oldEntry: TimeTableEntry, newEntry: TimeTableEntry) {
    const index = this.timeTableEntriesSubject.getValue().indexOf(oldEntry);
    if (index > 0) {
      const entries = this.timeTableEntriesSubject.getValue();
      entries[index] = newEntry;
      this.timeTableEntriesSubject.next(entries);

      return newEntry;
    }

    return null;
  }

}
