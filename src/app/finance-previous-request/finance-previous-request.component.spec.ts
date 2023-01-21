import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancePreviousRequestComponent } from './finance-previous-request.component';

describe('FinancePreviousRequestComponent', () => {
  let component: FinancePreviousRequestComponent;
  let fixture: ComponentFixture<FinancePreviousRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancePreviousRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancePreviousRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
