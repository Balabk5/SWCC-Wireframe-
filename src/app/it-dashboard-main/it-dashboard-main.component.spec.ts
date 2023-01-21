import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDashboardMainComponent } from './it-dashboard-main.component';

describe('ItDashboardMainComponent', () => {
  let component: ItDashboardMainComponent;
  let fixture: ComponentFixture<ItDashboardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDashboardMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
