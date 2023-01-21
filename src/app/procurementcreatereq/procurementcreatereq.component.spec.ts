import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementcreatereqComponent } from './procurementcreatereq.component';

describe('ProcurementcreatereqComponent', () => {
  let component: ProcurementcreatereqComponent;
  let fixture: ComponentFixture<ProcurementcreatereqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementcreatereqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementcreatereqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
