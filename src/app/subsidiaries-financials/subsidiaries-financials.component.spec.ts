import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidiariesFinancialsComponent } from './subsidiaries-financials.component';

describe('SubsidiariesFinancialsComponent', () => {
  let component: SubsidiariesFinancialsComponent;
  let fixture: ComponentFixture<SubsidiariesFinancialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsidiariesFinancialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsidiariesFinancialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
