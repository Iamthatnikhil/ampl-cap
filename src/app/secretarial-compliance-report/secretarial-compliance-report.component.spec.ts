import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretarialComplianceReportComponent } from './secretarial-compliance-report.component';

describe('SecretarialComplianceReportComponent', () => {
  let component: SecretarialComplianceReportComponent;
  let fixture: ComponentFixture<SecretarialComplianceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretarialComplianceReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretarialComplianceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
