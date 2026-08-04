import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditedFinancialsComponent } from './audited-financials.component';

describe('AuditedFinancialsComponent', () => {
  let component: AuditedFinancialsComponent;
  let fixture: ComponentFixture<AuditedFinancialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditedFinancialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditedFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
