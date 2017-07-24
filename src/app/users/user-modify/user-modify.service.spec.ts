import { TestBed, inject } from '@angular/core/testing';

import { UserModifyService } from './user-modify.service';

describe('UserModifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserModifyService]
    });
  });

  it('should be created', inject([UserModifyService], (service: UserModifyService) => {
    expect(service).toBeTruthy();
  }));
});
