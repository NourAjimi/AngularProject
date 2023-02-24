import { TestBed } from '@angular/core/testing';

import { MethodePartageService } from './methode-partage.service';

describe('MethodePartageService', () => {
  let service: MethodePartageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MethodePartageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
