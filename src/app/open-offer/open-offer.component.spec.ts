import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOfferComponent } from './open-offer.component';

describe('OpenOfferComponent', () => {
  let component: OpenOfferComponent;
  let fixture: ComponentFixture<OpenOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
