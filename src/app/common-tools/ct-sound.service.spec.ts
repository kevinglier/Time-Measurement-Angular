import { TestBed, inject } from '@angular/core/testing';

import { CtSoundService } from './ct-sound.service';

describe('CtSoundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CtSoundService]
    });
  });

  it('should be created', inject([CtSoundService], (service: CtSoundService) => {
    expect(service).toBeTruthy();
  }));
});
