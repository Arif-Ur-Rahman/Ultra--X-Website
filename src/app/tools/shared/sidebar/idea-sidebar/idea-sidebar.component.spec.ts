import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaSidebarComponent } from './idea-sidebar.component';

describe('IdeaSidebarComponent', () => {
  let component: IdeaSidebarComponent;
  let fixture: ComponentFixture<IdeaSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
