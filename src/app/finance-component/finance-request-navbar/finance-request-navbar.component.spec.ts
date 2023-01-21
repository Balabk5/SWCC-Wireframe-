import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceRequestNavbarComponent } from './finance-request-navbar.component';

describe('FinanceRequestNavbarComponent', () => {
  let component: FinanceRequestNavbarComponent;
  let fixture: ComponentFixture<FinanceRequestNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceRequestNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceRequestNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
