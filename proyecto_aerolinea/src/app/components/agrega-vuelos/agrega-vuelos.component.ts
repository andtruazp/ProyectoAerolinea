import { VuelosService } from './../../service/vuelos.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Vuelos } from 'src/app/models/vuelos';

@Component({
  selector: 'app-agrega-vuelos',
  templateUrl: './agrega-vuelos.component.html',
  styleUrls: ['./agrega-vuelos.component.css']
})
export class AgregaVuelosComponent implements OnInit {
  vuelos: any[] = [];
  id : number | null;
  vuelosForm: FormGroup

  constructor(private vueloService: VuelosService,
    private vfb: FormBuilder, 
    private aRoute: ActivatedRoute,
    private router: Router) {
      this.vuelosForm = this.vfb.group({
        id_empresa: ['', Validators.required],
        id_servicio: ['', Validators.required],
        origen: ['', Validators.required],
        destino: ['', Validators.required],
        hora_salida: ['', Validators.required],
        asientos_dis: ['', Validators.required],
        fecha_vuelos: ['', Validators.required],
        tipo_avion: ['', Validators.required],
        costo: ['', Validators.required],
      })
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
      //this.id = 1
    }

  ngOnInit(): void {
    this.getVuelos()
  }

  

  getVuelos(){
    if(this.id){
      this.vueloService.getVuelos(this.id).subscribe(
        (data) => {
          this.vuelos = data
        },(error) =>{
          console.error('Error al obtener datos del vuelo:', error);
        }
      )
    }
  }

  createVuelo() {
    this.vuelosForm.setValue({id_empresa: this.id})
    //if (this.vuelosForm.valid) {
      const nuevoVuelo = this.vuelosForm.value;
  
      // Llama al servicio para realizar la solicitud POST
      this.vueloService.createVuelo(nuevoVuelo).subscribe(
        (response) => {
          // La solicitud POST se ha completado con éxito.
          console.log('Solicitud POST exitosa', response);
          // Redirige a una página o realiza otra acción si es necesario.
          // this.router.navigate(['/otra_ruta']);
        },
        (error) => {
          // Maneja errores en caso de que la solicitud falle.
          console.error('Error en la solicitud POST', error);
        }
      );
    //}
  }
  

}
