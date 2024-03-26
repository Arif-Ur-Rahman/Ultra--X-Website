import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaDiscussionComponent } from './idea-discussion.component';

describe('IdeaDiscussionComponent', () => {
  let component: IdeaDiscussionComponent;
  let fixture: ComponentFixture<IdeaDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
