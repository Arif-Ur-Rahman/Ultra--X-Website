import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseIssueDialogComponent } from './raise-issue-dialog.component';

describe('RaiseIssueDialogComponent', () => {
  let component: RaiseIssueDialogComponent;
  let fixture: ComponentFixture<RaiseIssueDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseIssueDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiseIssueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
