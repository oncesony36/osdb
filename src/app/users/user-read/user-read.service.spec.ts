import { TestBed, inject } from '@angular/core/testing';

import { UserReadService } from './user-read.service';

describe('UserReadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserReadService]
    });
  });

  it('should be created', inject([UserReadService], (service: UserReadService) => {
    expect(service).toBeTruthy();
  }));
});
