import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperPublicationComponent } from './newspaper-publication.component';

describe('NewspaperPublicationComponent', () => {
  let component: NewspaperPublicationComponent;
  let fixture: ComponentFixture<NewspaperPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperPublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewspaperPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
