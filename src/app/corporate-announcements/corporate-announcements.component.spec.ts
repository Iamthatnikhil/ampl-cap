import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAnnouncementsComponent } from './corporate-announcements.component';

describe('CorporateAnnouncementsComponent', () => {
  let component: CorporateAnnouncementsComponent;
  let fixture: ComponentFixture<CorporateAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateAnnouncementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
