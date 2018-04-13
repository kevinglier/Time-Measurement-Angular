import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmTimeMeasurementComponent } from './tm-time-measurement.component';

describe('TmTimeMeasurementComponent', () => {
  let component: TmTimeMeasurementComponent;
  let fixture: ComponentFixture<TmTimeMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmTimeMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmTimeMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
