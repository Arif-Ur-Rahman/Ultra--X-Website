import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleIssueDiscussionComponent } from './single-issue-discussion.component';

describe('SingleIssueDiscussionComponent', () => {
  let component: SingleIssueDiscussionComponent;
  let fixture: ComponentFixture<SingleIssueDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleIssueDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleIssueDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
