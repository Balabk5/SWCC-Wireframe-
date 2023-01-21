import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCompletedRequestsComponent } from './hr-completed-requests.component';

describe('HrCompletedRequestsComponent', () => {
  let component: HrCompletedRequestsComponent;
  let fixture: ComponentFixture<HrCompletedRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrCompletedRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrCompletedRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
