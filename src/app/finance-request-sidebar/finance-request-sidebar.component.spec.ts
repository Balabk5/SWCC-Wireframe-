import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceRequestSidebarComponent } from './finance-request-sidebar.component';

describe('FinanceRequestSidebarComponent', () => {
  let component: FinanceRequestSidebarComponent;
  let fixture: ComponentFixture<FinanceRequestSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceRequestSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceRequestSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
