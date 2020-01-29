import { TestBed } from '@angular/core/testing';

import { VioxUiDirevetivesService } from './viox-ui-direvetives.service';

describe('VioxUiDirevetivesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VioxUiDirevetivesService = TestBed.get(VioxUiDirevetivesService);
    expect(service).toBeTruthy();
  });
});
