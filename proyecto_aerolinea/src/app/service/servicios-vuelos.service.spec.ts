import { TestBed } from '@angular/core/testing';

import { ServiciosVuelosService } from './servicios-vuelos.service';

describe('ServiciosVuelosService', () => {
  let service: ServiciosVuelosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosVuelosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
