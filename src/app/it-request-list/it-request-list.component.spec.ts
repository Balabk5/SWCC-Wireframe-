import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRequestListComponent } from './it-request-list.component';

describe('ItRequestListComponent', () => {
  let component: ItRequestListComponent;
  let fixture: ComponentFixture<ItRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItRequestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
