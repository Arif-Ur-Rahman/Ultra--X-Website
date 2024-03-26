import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeArchiveConfirmationDialogComponent } from './make-archive-confirmation-dialog.component';

describe('MakeArchiveConfirmationDialogComponent', () => {
  let component: MakeArchiveConfirmationDialogComponent;
  let fixture: ComponentFixture<MakeArchiveConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeArchiveConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeArchiveConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
