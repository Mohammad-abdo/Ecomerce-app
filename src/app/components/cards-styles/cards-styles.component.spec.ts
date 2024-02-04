import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsStylesComponent } from './cards-styles.component';

describe('CardsStylesComponent', () => {
  let component: CardsStylesComponent;
  let fixture: ComponentFixture<CardsStylesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsStylesComponent]
    });
    fixture = TestBed.createComponent(CardsStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
