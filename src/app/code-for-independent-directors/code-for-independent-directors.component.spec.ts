import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeForIndependentDirectorsComponent } from './code-for-independent-directors.component';

describe('CodeForIndependentDirectorsComponent', () => {
  let component: CodeForIndependentDirectorsComponent;
  let fixture: ComponentFixture<CodeForIndependentDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeForIndependentDirectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeForIndependentDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
