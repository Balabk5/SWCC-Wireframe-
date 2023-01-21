import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesthomepageComponent } from './requesthomepage.component';

describe('RequesthomepageComponent', () => {
  let component: RequesthomepageComponent;
  let fixture: ComponentFixture<RequesthomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesthomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequesthomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
