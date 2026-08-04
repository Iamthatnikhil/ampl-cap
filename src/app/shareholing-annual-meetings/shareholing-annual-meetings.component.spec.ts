import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholingAnnualMeetingsComponent } from './shareholing-annual-meetings.component';

describe('ShareholingAnnualMeetingsComponent', () => {
  let component: ShareholingAnnualMeetingsComponent;
  let fixture: ComponentFixture<ShareholingAnnualMeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareholingAnnualMeetingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareholingAnnualMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
