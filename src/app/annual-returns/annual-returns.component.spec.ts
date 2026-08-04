import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualReturnsComponent } from './annual-returns.component';

describe('AnnualReturnsComponent', () => {
  let component: AnnualReturnsComponent;
  let fixture: ComponentFixture<AnnualReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualReturnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnualReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
