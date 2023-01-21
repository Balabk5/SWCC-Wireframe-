import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceRequestComponent } from './finance-request.component';

describe('FinanceRequestComponent', () => {
  let component: FinanceRequestComponent;
  let fixture: ComponentFixture<FinanceRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
