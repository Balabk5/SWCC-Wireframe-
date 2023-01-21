import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceCreateRequestComponent } from './finance-create-request.component';

describe('FinanceCreateRequestComponent', () => {
  let component: FinanceCreateRequestComponent;
  let fixture: ComponentFixture<FinanceCreateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceCreateRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceCreateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
