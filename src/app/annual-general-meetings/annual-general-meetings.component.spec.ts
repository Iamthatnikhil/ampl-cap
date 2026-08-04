import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualGeneralMeetingsComponent } from './annual-general-meetings.component';

describe('AnnualGeneralMeetingsComponent', () => {
  let component: AnnualGeneralMeetingsComponent;
  let fixture: ComponentFixture<AnnualGeneralMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualGeneralMeetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualGeneralMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
