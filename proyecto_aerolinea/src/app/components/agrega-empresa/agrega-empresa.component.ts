import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpresaService } from './../../service/empresa.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agrega-empresa',
  templateUrl: './agrega-empresa.component.html',
  styleUrls: ['./agrega-empresa.component.css']
})
export class AgregaEmpresaComponent implements OnInit{
  empresa: any[] = [];
  empresaForm: FormGroup; 
  id : number | null;
  constructor(private empresaService : EmpresaService,
    private efb: FormBuilder, 
    private aRoute: ActivatedRoute,
    private router: Router
    ) {
      this.empresaForm = this.efb.group({
        nombre: ['', Validators.required],
        correo: ['', Validators.required],
        direccion: ['', Validators.required],
        telefono: ['', Validators.required],
        poli_condi: ['', Validators.required],
        estatus: [true]
      })
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    
  }

  ngOnInit(): void {
    //this.getEmpresa(this.id);
    
  }

  /*getEmpresa(id: any){
    this.empresaServie.getEmpresa(this.id).subscribe(empresa => {
      this.empresa = empresa;
      console.log(this.empresa)
    } )
  }*/

  createEmpresa() {
    if (this.empresaForm.valid) {
      const empresaData = this.empresaForm.value;

      // Llamar al servicio para realizar la solicitud POST
      this.empresaService.createEmpresa(empresaData).subscribe(
        (response) => {
          // La solicitud POST se ha completado con éxito.
          console.log('Solicitud POST exitosa', response);
          // Redirige a una página o realiza otra acción si es necesario.
          //this.router.navigate(['/otra_ruta']);
        },
        (error) => {
          // Maneja errores en caso de que la solicitud falle.
          console.error('Error en la solicitud POST', error);
        }
      );
    }
  }

}
