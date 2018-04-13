import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmTimerComponent } from './tm-timer.component';

describe('TmTimerComponent', () => {
  let component: TmTimerComponent;
  let fixture: ComponentFixture<TmTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
