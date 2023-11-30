import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IServicio, ServicioFactory} from '../models/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url = 'http://localhost:3002/servicio'

  constructor(private http: HttpClient, private servicioFactory: ServicioFactory) { }

  public getServicio(): Observable<any>{
    return this.http.get<any>(`${this.url}`)
  }

  public getAllServicio(): Observable<any>{
    return this.http.get<any>(`${this.url}/all`)
  }

  agregarServicio2(nuevoServicio: any): Observable<any> {
    return this.http.post<any>(this.url, nuevoServicio);
  }

  agregarServicio(nuevoServicio: any): Observable<any> {
    return this.http.post<any>(this.url, nuevoServicio).pipe(
      map((servicioData: any) => {
        const servicio = this.servicioFactory.createServicio(
          servicioData.tipo,
          servicioData.nombre,
          servicioData.descripcion,
          servicioData.costo,
          servicioData.extra
        );
        return servicio;
      })
    );
  }

  /*agregarServicioConInstancias(nuevoServicio: any): Observable<Servicio> {
    return this.http.post<any>(this.url, nuevoServicio).pipe(
      map((servicioData: any) =>
        this.servicioFactory.createServicio(
          servicioData.tipo,
          servicioData.nombre,
          servicioData.descripcion,
          servicioData.costo,
          servicioData.extra
        )
      )
    );
  }*/
}
