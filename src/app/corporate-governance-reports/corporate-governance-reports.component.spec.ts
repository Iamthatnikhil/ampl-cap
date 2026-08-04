import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateGovernanceReportsComponent } from './corporate-governance-reports.component';

describe('CorporateGovernanceReportsComponent', () => {
  let component: CorporateGovernanceReportsComponent;
  let fixture: ComponentFixture<CorporateGovernanceReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateGovernanceReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateGovernanceReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
