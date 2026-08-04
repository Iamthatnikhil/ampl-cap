import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentbankingComponent } from './investmentbanking.component';

describe('InvestmentbankingComponent', () => {
  let component: InvestmentbankingComponent;
  let fixture: ComponentFixture<InvestmentbankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentbankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentbankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
