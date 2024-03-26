import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobapplyformComponent } from './jobapplyform.component';

describe('JobapplyformComponent', () => {
  let component: JobapplyformComponent;
  let fixture: ComponentFixture<JobapplyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobapplyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobapplyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
