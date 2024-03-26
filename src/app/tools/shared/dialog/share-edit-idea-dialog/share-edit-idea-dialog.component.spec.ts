import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareEditIdeaDialogComponent } from './share-edit-idea-dialog.component';

describe('ShareEditIdeaDialogComponent', () => {
  let component: ShareEditIdeaDialogComponent;
  let fixture: ComponentFixture<ShareEditIdeaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareEditIdeaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareEditIdeaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
