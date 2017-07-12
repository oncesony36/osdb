import { TestBed, inject } from '@angular/core/testing';

import { TagcloudService } from './tagcloud.service';

describe('TagcloudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagcloudService]
    });
  });

  it('should be created', inject([TagcloudService], (service: TagcloudService) => {
    expect(service).toBeTruthy();
  }));
});
