import { TestBed } from '@angular/core/testing';

import { ProducSelectedService } from './produc-selected.service';

describe('ProducSelectedService', () => {
  let service: ProducSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
