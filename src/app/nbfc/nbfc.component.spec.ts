import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbfcComponent } from './nbfc.component';

describe('NbfcComponent', () => {
  let component: NbfcComponent;
  let fixture: ComponentFixture<NbfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbfcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
