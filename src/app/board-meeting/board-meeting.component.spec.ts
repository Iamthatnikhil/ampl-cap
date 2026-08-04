import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardMeetingComponent } from './board-meeting.component';

describe('BoardMeetingComponent', () => {
  let component: BoardMeetingComponent;
  let fixture: ComponentFixture<BoardMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardMeetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
