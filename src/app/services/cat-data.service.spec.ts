import { TestBed } from '@angular/core/testing';

import { CatDataService } from './cat-data.service';

describe('CatDataService', () => {
  let service: CatDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
