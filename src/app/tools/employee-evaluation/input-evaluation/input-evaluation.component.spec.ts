import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEvaluationComponent } from './input-evaluation.component';

describe('InputEvaluationComponent', () => {
  let component: InputEvaluationComponent;
  let fixture: ComponentFixture<InputEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputEvaluationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
