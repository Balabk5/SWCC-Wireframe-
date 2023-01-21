import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItNavbarComponent } from './it-navbar.component';

describe('ItNavbarComponent', () => {
  let component: ItNavbarComponent;
  let fixture: ComponentFixture<ItNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
