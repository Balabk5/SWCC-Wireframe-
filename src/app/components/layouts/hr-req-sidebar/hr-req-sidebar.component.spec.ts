import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrReqSidebarComponent } from './hr-req-sidebar.component';

describe('HrReqSidebarComponent', () => {
  let component: HrReqSidebarComponent;
  let fixture: ComponentFixture<HrReqSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrReqSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrReqSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
