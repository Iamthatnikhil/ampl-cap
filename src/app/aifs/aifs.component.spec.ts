import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AifsComponent } from './aifs.component';

describe('AifsComponent', () => {
  let component: AifsComponent;
  let fixture: ComponentFixture<AifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AifsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
