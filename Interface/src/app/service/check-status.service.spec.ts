import { TestBed } from '@angular/core/testing';

import { CheckStatusService } from './check-status.service';

describe('CheckStatusService', () => {
  let service: CheckStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
