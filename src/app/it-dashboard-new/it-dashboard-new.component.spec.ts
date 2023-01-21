import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDashboardNewComponent } from './it-dashboard-new.component';

describe('ItDashboardNewComponent', () => {
  let component: ItDashboardNewComponent;
  let fixture: ComponentFixture<ItDashboardNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDashboardNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDashboardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
