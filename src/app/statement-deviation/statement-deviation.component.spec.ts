import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementDeviationComponent } from './statement-deviation.component';

describe('StatementDeviationComponent', () => {
  let component: StatementDeviationComponent;
  let fixture: ComponentFixture<StatementDeviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementDeviationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementDeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
