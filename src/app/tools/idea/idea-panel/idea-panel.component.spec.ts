import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaPanelComponent } from './idea-panel.component';

describe('IdeaPanelComponent', () => {
  let component: IdeaPanelComponent;
  let fixture: ComponentFixture<IdeaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
