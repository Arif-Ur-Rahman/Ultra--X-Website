import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDiscussionComponent } from './public-discussion.component';

describe('PublicDiscussionComponent', () => {
  let component: PublicDiscussionComponent;
  let fixture: ComponentFixture<PublicDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicDiscussionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
