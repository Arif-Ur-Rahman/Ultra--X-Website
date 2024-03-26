import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteBoardSidebarComponent } from './white-board-sidebar.component';

describe('WhiteBoardSidebarComponent', () => {
  let component: WhiteBoardSidebarComponent;
  let fixture: ComponentFixture<WhiteBoardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteBoardSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteBoardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
