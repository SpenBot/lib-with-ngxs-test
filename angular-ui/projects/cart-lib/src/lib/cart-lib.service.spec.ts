import { TestBed, inject } from '@angular/core/testing';

import { CartLibService } from './cart-lib.service';

describe('CartLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartLibService]
    });
  });

  it('should be created', inject([CartLibService], (service: CartLibService) => {
    expect(service).toBeTruthy();
  }));
});
