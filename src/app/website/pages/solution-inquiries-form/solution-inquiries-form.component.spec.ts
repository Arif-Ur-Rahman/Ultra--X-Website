import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionInquiriesFormComponent } from './solution-inquiries-form.component';

describe('SolutionInquiriesFormComponent', () => {
  let component: SolutionInquiriesFormComponent;
  let fixture: ComponentFixture<SolutionInquiriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionInquiriesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionInquiriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
