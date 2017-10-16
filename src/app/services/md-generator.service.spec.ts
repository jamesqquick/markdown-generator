import { TestBed, inject } from '@angular/core/testing';

import { MdGeneratorService } from './md-generator.service';

describe('MdGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdGeneratorService]
    });
  });

  it('should be created', inject([MdGeneratorService], (service: MdGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
