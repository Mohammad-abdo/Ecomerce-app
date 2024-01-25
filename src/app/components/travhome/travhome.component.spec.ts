import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravhomeComponent } from './travhome.component';

describe('TravhomeComponent', () => {
  let component: TravhomeComponent;
  let fixture: ComponentFixture<TravhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravhomeComponent]
    });
    fixture = TestBed.createComponent(TravhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
