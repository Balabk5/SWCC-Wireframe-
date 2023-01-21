import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrOnholdRequestsComponent } from './hr-onhold-requests.component';

describe('HrOnholdRequestsComponent', () => {
  let component: HrOnholdRequestsComponent;
  let fixture: ComponentFixture<HrOnholdRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrOnholdRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrOnholdRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
