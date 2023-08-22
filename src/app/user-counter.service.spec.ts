import { TestBed } from '@angular/core/testing';

import { UserCounterService } from './user-counter.service';

describe('UserCounterService', () => {
  let service: UserCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
