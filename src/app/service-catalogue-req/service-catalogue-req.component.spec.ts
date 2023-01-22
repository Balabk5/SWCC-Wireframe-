import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCatalogueReqComponent } from './service-catalogue-req.component';

describe('ServiceCatalogueReqComponent', () => {
  let component: ServiceCatalogueReqComponent;
  let fixture: ComponentFixture<ServiceCatalogueReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCatalogueReqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCatalogueReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
