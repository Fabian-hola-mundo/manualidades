import { TestBed } from '@angular/core/testing';

import { GetFakeProductsService } from './get-fake-products.service';

describe('GetFakeProductsService', () => {
  let service: GetFakeProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFakeProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
