import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosVuelosComponent } from './servicios-vuelos.component';

describe('ServiciosVuelosComponent', () => {
  let component: ServiciosVuelosComponent;
  let fixture: ComponentFixture<ServiciosVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosVuelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosVuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
