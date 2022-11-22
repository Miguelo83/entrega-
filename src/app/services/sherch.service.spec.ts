import { TestBed } from '@angular/core/testing';

import { SherchService } from './sherch.service';

describe('SherchService', () => {
  let service: SherchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SherchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
