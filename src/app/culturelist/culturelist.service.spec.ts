import { TestBed, inject } from '@angular/core/testing';

import { CulturelistService } from './culturelist.service';

describe('CulturelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CulturelistService]
    });
  });

  it('should be created', inject([CulturelistService], (service: CulturelistService) => {
    expect(service).toBeTruthy();
  }));
});
