import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftDisclosureComponent } from './draft-disclosure.component';

describe('DraftDisclosureComponent', () => {
  let component: DraftDisclosureComponent;
  let fixture: ComponentFixture<DraftDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraftDisclosureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
