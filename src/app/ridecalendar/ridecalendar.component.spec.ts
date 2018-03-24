import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidecalendarComponent } from './ridecalendar.component';

describe('RidecalendarComponent', () => {
  let component: RidecalendarComponent;
  let fixture: ComponentFixture<RidecalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidecalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidecalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
