import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPerformanceComponent } from './report-performance.component';

describe('ReportPerformanceComponent', () => {
  let component: ReportPerformanceComponent;
  let fixture: ComponentFixture<ReportPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
