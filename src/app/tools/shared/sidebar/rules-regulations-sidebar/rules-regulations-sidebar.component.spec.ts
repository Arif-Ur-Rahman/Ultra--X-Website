import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesRegulationsSidebarComponent } from './rules-regulations-sidebar.component';

describe('RulesRegulationsSidebarComponent', () => {
  let component: RulesRegulationsSidebarComponent;
  let fixture: ComponentFixture<RulesRegulationsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesRegulationsSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesRegulationsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
