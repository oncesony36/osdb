import { TestBed, inject } from '@angular/core/testing';

import { RooftoplistService } from './rooftoplist.service';

describe('RooftoplistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RooftoplistService]
    });
  });

  it('should be created', inject([RooftoplistService], (service: RooftoplistService) => {
    expect(service).toBeTruthy();
  }));
});
