import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDashboardInprogressComponent } from './it-dashboard-inprogress.component';

describe('ItDashboardInprogressComponent', () => {
  let component: ItDashboardInprogressComponent;
  let fixture: ComponentFixture<ItDashboardInprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDashboardInprogressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDashboardInprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
