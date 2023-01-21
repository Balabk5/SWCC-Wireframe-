import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceReqLayoutComponent } from './finance-req-layout.component';

describe('FinanceReqLayoutComponent', () => {
  let component: FinanceReqLayoutComponent;
  let fixture: ComponentFixture<FinanceReqLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceReqLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceReqLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
