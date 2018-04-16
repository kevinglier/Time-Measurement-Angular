import {TestBed, inject} from '@angular/core/testing';

import {TmTimeMeasurementService} from './tm-time-measurement.service';

describe('TmTimeMeasurementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmTimeMeasurementService]
    });
  });

  it('should be created', inject([TmTimeMeasurementService], (service: TmTimeMeasurementService) => {
    expect(service).toBeTruthy();
  }));
  it('should add 1 items', inject([TmTimeMeasurementService], (service: TmTimeMeasurementService) => {

    service.addTimeTableEntry({
      time: new Date(),
      duration: 0,
      text: ''
    });

    expect(service.timeTableEntries.length).toEqual(1);

  }));
});
