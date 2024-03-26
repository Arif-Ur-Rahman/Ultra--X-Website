import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSidebarComponent } from './health-sidebar.component';

describe('HealthSidebarComponent', () => {
  let component: HealthSidebarComponent;
  let fixture: ComponentFixture<HealthSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
