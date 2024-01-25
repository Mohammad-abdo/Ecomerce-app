import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousectegoryComponent } from './housectegory.component';

describe('HousectegoryComponent', () => {
  let component: HousectegoryComponent;
  let fixture: ComponentFixture<HousectegoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousectegoryComponent]
    });
    fixture = TestBed.createComponent(HousectegoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
