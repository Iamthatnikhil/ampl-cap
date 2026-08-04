import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaturyAuditorsComponent } from './statury-auditors.component';

describe('StaturyAuditorsComponent', () => {
  let component: StaturyAuditorsComponent;
  let fixture: ComponentFixture<StaturyAuditorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaturyAuditorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaturyAuditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
