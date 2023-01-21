import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrNewRequestComponent } from './hr-new-request.component';

describe('HrNewRequestComponent', () => {
  let component: HrNewRequestComponent;
  let fixture: ComponentFixture<HrNewRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrNewRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrNewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
