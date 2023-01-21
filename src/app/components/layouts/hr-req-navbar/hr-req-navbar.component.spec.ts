import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrReqNavbarComponent } from './hr-req-navbar.component';

describe('HrReqNavbarComponent', () => {
  let component: HrReqNavbarComponent;
  let fixture: ComponentFixture<HrReqNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrReqNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrReqNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
