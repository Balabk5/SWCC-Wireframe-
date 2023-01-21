import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDashboardOnholdComponent } from './it-dashboard-onhold.component';

describe('ItDashboardOnholdComponent', () => {
  let component: ItDashboardOnholdComponent;
  let fixture: ComponentFixture<ItDashboardOnholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDashboardOnholdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDashboardOnholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
