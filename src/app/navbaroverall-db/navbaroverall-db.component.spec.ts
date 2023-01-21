import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaroverallDBComponent } from './navbaroverall-db.component';

describe('NavbaroverallDBComponent', () => {
  let component: NavbaroverallDBComponent;
  let fixture: ComponentFixture<NavbaroverallDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaroverallDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbaroverallDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
