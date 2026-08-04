import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfKmpComponent } from './details-of-kmp.component';

describe('DetailsOfKmpComponent', () => {
  let component: DetailsOfKmpComponent;
  let fixture: ComponentFixture<DetailsOfKmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsOfKmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsOfKmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
