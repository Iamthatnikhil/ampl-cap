import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiedInstitutionalPlacementComponent } from './qualified-institutional-placement.component';

describe('QualifiedInstitutionalPlacementComponent', () => {
  let component: QualifiedInstitutionalPlacementComponent;
  let fixture: ComponentFixture<QualifiedInstitutionalPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifiedInstitutionalPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualifiedInstitutionalPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
