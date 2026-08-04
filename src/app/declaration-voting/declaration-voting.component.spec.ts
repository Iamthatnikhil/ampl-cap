import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationVotingComponent } from './declaration-voting.component';

describe('DeclarationVotingComponent', () => {
  let component: DeclarationVotingComponent;
  let fixture: ComponentFixture<DeclarationVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationVotingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
