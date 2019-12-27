import { TestBed } from '@angular/core/testing';

import { VioxMasonryService } from './viox-masonry.service';

describe('VioxMasonryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VioxMasonryService = TestBed.get(VioxMasonryService);
    expect(service).toBeTruthy();
  });
});
