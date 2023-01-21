import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDashboardSidebarComponent } from './it-dashboard-sidebar.component';

describe('ItDashboardSidebarComponent', () => {
  let component: ItDashboardSidebarComponent;
  let fixture: ComponentFixture<ItDashboardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDashboardSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
