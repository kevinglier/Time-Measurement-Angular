import { Injectable } from '@angular/core';
import { TimeTableEntry } from './time-table-entry';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class TimeMeasurementService {

  private timeTableEntriesSubject: BehaviorSubject<TimeTableEntry[]> = new BehaviorSubject<TimeTableEntry[]>([]);
  public timeTableEntries: Observable<TimeTableEntry[]> = this.timeTableEntriesSubject.asObservable();;

  constructor() { }
  
  addTimeTableEntry(entry: TimeTableEntry) {
    let entries = this.timeTableEntriesSubject.getValue();
    entries.push(entry);
    this.timeTableEntriesSubject.next(entries);
  }
  
  removeTimeTableEntry(entry: TimeTableEntry) {
    let index = this.timeTableEntriesSubject.getValue().indexOf(entry);
    if (index > 0) {
      let entries = this.timeTableEntriesSubject.getValue().slice(index, 1);
      this.timeTableEntriesSubject.next(entries);
    }
  }
  
  editTimeTableEntry(oldEntry: TimeTableEntry, newEntry: TimeTableEntry) {
    
    let index = this.timeTableEntriesSubject.getValue().indexOf(oldEntry);
    if (index > 0) {
      
      let entries = this.timeTableEntriesSubject.getValue();
      entries[index] = newEntry;
      this.timeTableEntriesSubject.next(entries);
    }
  }

}
