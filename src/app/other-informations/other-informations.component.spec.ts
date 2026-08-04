import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInformationsComponent } from './other-informations.component';

describe('OtherInformationsComponent', () => {
  let component: OtherInformationsComponent;
  let fixture: ComponentFixture<OtherInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherInformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
