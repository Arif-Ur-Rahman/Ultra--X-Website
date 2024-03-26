import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteDashboardSidebarComponent } from './website-dashboard-sidebar.component';

describe('WebsiteDashboardSidebarComponent', () => {
  let component: WebsiteDashboardSidebarComponent;
  let fixture: ComponentFixture<WebsiteDashboardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsiteDashboardSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
