import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsInRespectComponent } from './documents-in-respect.component';

describe('DocumentsInRespectComponent', () => {
  let component: DocumentsInRespectComponent;
  let fixture: ComponentFixture<DocumentsInRespectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsInRespectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsInRespectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
