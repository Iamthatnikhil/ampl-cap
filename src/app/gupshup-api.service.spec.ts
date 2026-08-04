import { TestBed } from '@angular/core/testing';

import { GupshupApiService } from './gupshup-api.service';

describe('GupshupApiService', () => {
  let service: GupshupApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GupshupApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
