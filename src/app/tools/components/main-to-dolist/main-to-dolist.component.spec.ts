import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToDOListComponent } from './main-to-dolist.component';

describe('MainToDOListComponent', () => {
  let component: MainToDOListComponent;
  let fixture: ComponentFixture<MainToDOListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainToDOListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToDOListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
