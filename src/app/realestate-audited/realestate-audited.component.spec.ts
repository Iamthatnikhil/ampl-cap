import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateAuditedComponent } from './realestate-audited.component';

describe('RealestateAuditedComponent', () => {
  let component: RealestateAuditedComponent;
  let fixture: ComponentFixture<RealestateAuditedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealestateAuditedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealestateAuditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
