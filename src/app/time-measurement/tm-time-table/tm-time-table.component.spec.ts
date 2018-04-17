import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmTimeTableComponent } from './tm-time-table.component';

describe('TmTimeTableComponent', () => {
  let component: TmTimeTableComponent;
  let fixture: ComponentFixture<TmTimeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmTimeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
