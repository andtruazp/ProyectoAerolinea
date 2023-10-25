import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agrega-vuelos',
  templateUrl: './agrega-vuelos.component.html',
  styleUrls: ['./agrega-vuelos.component.css']
})
export class AgregaVuelosComponent implements OnInit {
  vuelos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Realiza una solicitud GET al servidor para obtener los datos de vuelos
    this.http.get('http://localhost:3002/vuelos').subscribe((data: any) => {
      this.vuelos = data;
    });
  }

}
