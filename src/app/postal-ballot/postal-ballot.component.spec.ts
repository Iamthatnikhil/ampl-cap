import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalBallotComponent } from './postal-ballot.component';

describe('PostalBallotComponent', () => {
  let component: PostalBallotComponent;
  let fixture: ComponentFixture<PostalBallotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostalBallotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostalBallotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
