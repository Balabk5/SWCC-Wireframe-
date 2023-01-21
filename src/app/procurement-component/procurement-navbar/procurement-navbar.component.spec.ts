import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementNavbarComponent } from './procurement-navbar.component';

describe('ProcurementNavbarComponent', () => {
  let component: ProcurementNavbarComponent;
  let fixture: ComponentFixture<ProcurementNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
