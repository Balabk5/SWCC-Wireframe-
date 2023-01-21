import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItLayoutComponent } from './it-layout.component';

describe('ItLayoutComponent', () => {
  let component: ItLayoutComponent;
  let fixture: ComponentFixture<ItLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
