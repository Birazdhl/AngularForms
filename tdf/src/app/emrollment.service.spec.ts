import { TestBed } from '@angular/core/testing';

import { EmrollmentService } from './emrollment.service';

describe('EmrollmentService', () => {
  let service: EmrollmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
