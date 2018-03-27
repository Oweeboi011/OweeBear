import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcalendarComponent } from './appcalendar.component';

describe('AppcalendarComponent', () => {
  let component: AppcalendarComponent;
  let fixture: ComponentFixture<AppcalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
