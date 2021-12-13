import { TestBed } from '@angular/core/testing';

import { UpdatePortfolioService } from './update-portfolio.service';

describe('UpdatePortfolioService', () => {
  let service: UpdatePortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
