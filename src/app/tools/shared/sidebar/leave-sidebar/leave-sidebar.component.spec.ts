import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveSidebarComponent } from './leave-sidebar.component';

describe('LeaveSidebarComponent', () => {
  let component: LeaveSidebarComponent;
  let fixture: ComponentFixture<LeaveSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
