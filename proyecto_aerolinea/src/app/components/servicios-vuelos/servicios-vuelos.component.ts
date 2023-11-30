import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicioService } from 'src/app/service/servicio.service';
import { Servicio, ServicioFactory, IServicio, BasicoFactory, PremiumFactory, PlusFactory } from 'src/app/models/servicios';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-servicios-vuelos',
  templateUrl: './servicios-vuelos.component.html',
  styleUrls: ['./servicios-vuelos.component.css']
})
export class ServiciosVuelosComponent implements OnInit{
  servicio: Servicio []= [];
  servicioForm: FormGroup;

  constructor(
    private servicioService: ServicioService,
    private sfb: FormBuilder,
  ){
    this.servicioForm = this.sfb.group({
      tipo: ['basico'],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      costo: [null, Validators.required],
      extra: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.habilitarCampos();
    this.getAllServicios();
  }

  habilitarCampos() {
    const tipoServicio = this.servicioForm.get('tipo')?.value;

    if (tipoServicio === 'basico') {
      this.servicioForm.get('costo')?.disable();
      this.servicioForm.get('extra')?.disable();
    } else if (tipoServicio === 'plus') {
      this.servicioForm.get('costo')?.enable();
      this.servicioForm.get('extra')?.disable();
    } else {
      this.servicioForm.get('costo')?.enable();
      this.servicioForm.get('extra')?.enable();
    }
  }

  getAllServicios(){
    this.servicioService.getAllServicio().subscribe((options: Servicio[])=> {
      this.servicio = options;
    })
  }

  onSubmit() {
    if (this.servicioForm.valid) {
      const nuevoServicio = this.servicioForm.value;

      // Llamada al servicio para agregar el nuevo servicio
      this.servicioService.agregarServicio(nuevoServicio).pipe(
        map((servicioData: any) => {
          const servicio = this.crearInstanciaServicio(servicioData);
          return servicio;
        }),
        catchError((error) => {
          console.error('Error al agregar servicio', error);
          // Manejar el error según sea necesario
          throw error; // Reenviar el error para que pueda ser manejado por el componente
        })
      ).subscribe(
        (servicio: IServicio) => {
          console.log('Servicio agregado exitosamente', servicio);
        }
      );

      window.location.reload();
    }
  }

  private crearInstanciaServicio(servicioData: any): IServicio {
    let servicioFactory;
    switch (servicioData.tipo) {
      case 'basico':
        servicioFactory = new BasicoFactory();
        break;
      case 'plus':
        servicioFactory = new PlusFactory();
        break;
      case 'premium':
        servicioFactory = new PremiumFactory();
        break;
      default:
        throw new Error('Tipo de servicio no válido');
    }
  
    return servicioFactory.createServicio(
      servicioData.nombre,
      servicioData.descripcion,
      servicioData.costo,
      servicioData.extra
    );
  }
}


