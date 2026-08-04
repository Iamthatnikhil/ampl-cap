import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfNodalOfficerComponent } from './details-of-nodal-officer.component';

describe('DetailsOfNodalOfficerComponent', () => {
  let component: DetailsOfNodalOfficerComponent;
  let fixture: ComponentFixture<DetailsOfNodalOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfNodalOfficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfNodalOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
