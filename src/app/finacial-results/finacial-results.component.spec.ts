import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinacialResultsComponent } from './finacial-results.component';

describe('FinacialResultsComponent', () => {
  let component: FinacialResultsComponent;
  let fixture: ComponentFixture<FinacialResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinacialResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinacialResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
