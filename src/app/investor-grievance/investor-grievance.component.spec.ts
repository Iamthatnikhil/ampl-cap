import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorGrievanceComponent } from './investor-grievance.component';

describe('InvestorGrievanceComponent', () => {
  let component: InvestorGrievanceComponent;
  let fixture: ComponentFixture<InvestorGrievanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorGrievanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestorGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
