import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceOnholdRequestsComponent } from './finance-onhold-requests.component';

describe('FinanceOnholdRequestsComponent', () => {
  let component: FinanceOnholdRequestsComponent;
  let fixture: ComponentFixture<FinanceOnholdRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceOnholdRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceOnholdRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
