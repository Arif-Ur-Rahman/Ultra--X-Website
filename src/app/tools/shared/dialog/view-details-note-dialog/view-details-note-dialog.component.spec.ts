import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsNoteDialogComponent } from './view-details-note-dialog.component';

describe('ViewDetailsNoteDialogComponent', () => {
  let component: ViewDetailsNoteDialogComponent;
  let fixture: ComponentFixture<ViewDetailsNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailsNoteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailsNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
