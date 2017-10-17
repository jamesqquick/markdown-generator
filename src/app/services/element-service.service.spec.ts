import { TestBed, inject } from '@angular/core/testing';

import { ElementServiceService } from './element-service.service';

describe('ElementServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementServiceService]
    });
  });

  it('should be created', inject([ElementServiceService], (service: ElementServiceService) => {
    expect(service).toBeTruthy();
  }));
});
