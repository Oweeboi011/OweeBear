import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearLibraryComponent } from './gearlibrary.component';

describe('RidecalendarComponent', () => {
  let component: GearLibraryComponent;
  let fixture: ComponentFixture<GearLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
