import { TestBed, inject } from '@angular/core/testing';

import { MeetinglistService } from './meetinglist.service';

describe('MeetinglistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetinglistService]
    });
  });

  it('should be created', inject([MeetinglistService], (service: MeetinglistService) => {
    expect(service).toBeTruthy();
  }));
});
