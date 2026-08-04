import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedPartyTransactionComponent } from './related-party-transaction.component';

describe('RelatedPartyTransactionComponent', () => {
  let component: RelatedPartyTransactionComponent;
  let fixture: ComponentFixture<RelatedPartyTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedPartyTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedPartyTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
