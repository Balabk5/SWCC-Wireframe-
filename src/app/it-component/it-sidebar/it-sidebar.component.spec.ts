import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSidebarComponent } from './it-sidebar.component';

describe('ItSidebarComponent', () => {
  let component: ItSidebarComponent;
  let fixture: ComponentFixture<ItSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
