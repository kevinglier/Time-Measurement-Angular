import { TestBed, inject } from '@angular/core/testing';

import { TmTimeMeasurementService } from './tm-time-measurement.service';

describe('TmTimeMeasurementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmTimeMeasurementService]
    });
  });

  it('should be created', inject([TmTimeMeasurementService], (service: TmTimeMeasurementService) => {
    expect(service).toBeTruthy();
  }));
});
