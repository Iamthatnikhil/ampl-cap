import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentAimMulticapStrategyComponent } from './credent-aim-multicap-strategy.component';

describe('CredentAimMulticapStrategyComponent', () => {
  let component: CredentAimMulticapStrategyComponent;
  let fixture: ComponentFixture<CredentAimMulticapStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentAimMulticapStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentAimMulticapStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
