import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousedetailsComponent } from './housedetails.component';

describe('HousedetailsComponent', () => {
  let component: HousedetailsComponent;
  let fixture: ComponentFixture<HousedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousedetailsComponent]
    });
    fixture = TestBed.createComponent(HousedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
