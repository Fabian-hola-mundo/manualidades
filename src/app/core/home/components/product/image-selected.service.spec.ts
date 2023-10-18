import { TestBed } from '@angular/core/testing';

import { ImageSelectedService } from './image-selected.service';

describe('ImageSelectedService', () => {
  let service: ImageSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
