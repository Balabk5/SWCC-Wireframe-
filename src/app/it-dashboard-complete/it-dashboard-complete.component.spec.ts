import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDashboardCompleteComponent } from './it-dashboard-complete.component';

describe('ItDashboardCompleteComponent', () => {
  let component: ItDashboardCompleteComponent;
  let fixture: ComponentFixture<ItDashboardCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDashboardCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItDashboardCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
