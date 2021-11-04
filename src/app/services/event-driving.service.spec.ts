import { TestBed } from '@angular/core/testing';

import { EventDrivingService } from './event-driving.service';

describe('EventDrivingService', () => {
  let service: EventDrivingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventDrivingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
