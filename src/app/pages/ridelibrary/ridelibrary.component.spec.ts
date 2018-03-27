import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidelibraryComponent } from './ridelibrary.component';

describe('RidelibraryComponent', () => {
  let component: RidelibraryComponent;
  let fixture: ComponentFixture<RidelibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidelibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidelibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
