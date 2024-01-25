import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhousesComponent } from './myhouses.component';

describe('MyhousesComponent', () => {
  let component: MyhousesComponent;
  let fixture: ComponentFixture<MyhousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyhousesComponent]
    });
    fixture = TestBed.createComponent(MyhousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
