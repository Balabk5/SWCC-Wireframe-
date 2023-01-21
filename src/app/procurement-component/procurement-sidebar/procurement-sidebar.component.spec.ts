import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementSidebarComponent } from './procurement-sidebar.component';

describe('ProcurementSidebarComponent', () => {
  let component: ProcurementSidebarComponent;
  let fixture: ComponentFixture<ProcurementSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
