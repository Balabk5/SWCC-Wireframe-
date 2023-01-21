import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDashboardLayoutComponent } from './it-dashboard-layout.component';

describe('ItDashboardLayoutComponent', () => {
  let component: ItDashboardLayoutComponent;
  let fixture: ComponentFixture<ItDashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDashboardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
