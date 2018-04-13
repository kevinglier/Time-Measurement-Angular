import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmSettingsComponent } from './tm-settings.component';

describe('TmSettingsComponent', () => {
  let component: TmSettingsComponent;
  let fixture: ComponentFixture<TmSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
