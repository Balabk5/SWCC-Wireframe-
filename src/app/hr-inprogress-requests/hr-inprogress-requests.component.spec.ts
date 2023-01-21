import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrInprogressRequestsComponent } from './hr-inprogress-requests.component';

describe('HrInprogressRequestsComponent', () => {
  let component: HrInprogressRequestsComponent;
  let fixture: ComponentFixture<HrInprogressRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrInprogressRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrInprogressRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
