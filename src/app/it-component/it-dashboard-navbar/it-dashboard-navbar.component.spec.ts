import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDashboardNavbarComponent } from './it-dashboard-navbar.component';

describe('ItDashboardNavbarComponent', () => {
  let component: ItDashboardNavbarComponent;
  let fixture: ComponentFixture<ItDashboardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDashboardNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDashboardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
