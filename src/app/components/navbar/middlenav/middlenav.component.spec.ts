import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlenavComponent } from './middlenav.component';

describe('MiddlenavComponent', () => {
  let component: MiddlenavComponent;
  let fixture: ComponentFixture<MiddlenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddlenavComponent]
    });
    fixture = TestBed.createComponent(MiddlenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
