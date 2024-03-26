import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobInquiresFormComponent } from './job-inquires-form.component';

describe('JobInquiresFormComponent', () => {
  let component: JobInquiresFormComponent;
  let fixture: ComponentFixture<JobInquiresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobInquiresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobInquiresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
