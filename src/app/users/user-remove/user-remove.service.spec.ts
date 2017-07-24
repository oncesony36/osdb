import { TestBed, inject } from '@angular/core/testing';

import { UserRemoveService } from './user-remove.service';

describe('UserRemoveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRemoveService]
    });
  });

  it('should be created', inject([UserRemoveService], (service: UserRemoveService) => {
    expect(service).toBeTruthy();
  }));
});
