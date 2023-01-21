import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrNewRequestsComponent } from './hr-new-requests.component';

describe('HrNewRequestsComponent', () => {
  let component: HrNewRequestsComponent;
  let fixture: ComponentFixture<HrNewRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrNewRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrNewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
