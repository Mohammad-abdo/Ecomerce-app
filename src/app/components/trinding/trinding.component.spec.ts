import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrindingComponent } from './trinding.component';

describe('TrindingComponent', () => {
  let component: TrindingComponent;
  let fixture: ComponentFixture<TrindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrindingComponent]
    });
    fixture = TestBed.createComponent(TrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
