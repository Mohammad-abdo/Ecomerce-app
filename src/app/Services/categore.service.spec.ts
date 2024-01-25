import { TestBed } from '@angular/core/testing';

import { CategoreService } from './categore.service';

describe('CategoreService', () => {
  let service: CategoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
