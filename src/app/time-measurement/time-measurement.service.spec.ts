import { TestBed, inject } from '@angular/core/testing';

import { TimeMeasurementService } from './time-measurement.service';

describe('TimeMeasurementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeMeasurementService]
    });
  });

  it('should be created', inject([TimeMeasurementService], (service: TimeMeasurementService) => {
    expect(service).toBeTruthy();
  }));
});
