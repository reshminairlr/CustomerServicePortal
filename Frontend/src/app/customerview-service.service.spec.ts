import { TestBed } from '@angular/core/testing';

import { CustomerviewServiceService } from './customerview-service.service';

describe('CustomerviewServiceService', () => {
  let service: CustomerviewServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerviewServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
