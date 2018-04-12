import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeMeasurementComponent } from './time-measurement.component';

describe('TimeMeasurementComponent', () => {
  let component: TimeMeasurementComponent;
  let fixture: ComponentFixture<TimeMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
