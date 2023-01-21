import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementrequestlistComponent } from './procurementrequestlist.component';

describe('ProcurementrequestlistComponent', () => {
  let component: ProcurementrequestlistComponent;
  let fixture: ComponentFixture<ProcurementrequestlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcurementrequestlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementrequestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
