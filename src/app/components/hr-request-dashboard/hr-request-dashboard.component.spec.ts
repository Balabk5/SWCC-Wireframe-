import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRequestDashboardComponent } from './hr-request-dashboard.component';

describe('HrRequestDashboardComponent', () => {
  let component: HrRequestDashboardComponent;
  let fixture: ComponentFixture<HrRequestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrRequestDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrRequestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
