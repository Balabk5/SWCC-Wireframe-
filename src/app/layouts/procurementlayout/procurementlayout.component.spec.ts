import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementlayoutComponent } from './procurementlayout.component';

describe('ProcurementlayoutComponent', () => {
  let component: ProcurementlayoutComponent;
  let fixture: ComponentFixture<ProcurementlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
