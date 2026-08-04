import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeOfPostalBallotComponent } from './notice-of-postal-ballot.component';

describe('NoticeOfPostalBallotComponent', () => {
  let component: NoticeOfPostalBallotComponent;
  let fixture: ComponentFixture<NoticeOfPostalBallotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeOfPostalBallotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeOfPostalBallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
