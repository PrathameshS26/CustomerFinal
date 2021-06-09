import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertabComponent } from './customertab.component';

describe('CustomertabComponent', () => {
  let component: CustomertabComponent;
  let fixture: ComponentFixture<CustomertabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomertabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
