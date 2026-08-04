import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrouchersComponent } from './brouchers.component';

describe('BrouchersComponent', () => {
  let component: BrouchersComponent;
  let fixture: ComponentFixture<BrouchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrouchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
