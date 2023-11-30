import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BasicoFactory, IServicio, PlusFactory, PremiumFactory} from '../models/servicios';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url = 'http://localhost:3002/servicio'

  constructor(private http: HttpClient) { }

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
    let servicioFactory: BasicoFactory | PlusFactory | PremiumFactory;
    switch (nuevoServicio.tipo) {
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
  
    return this.http.post<any>(this.url, nuevoServicio).pipe(
      map((servicioData: any) => {
        const servicio = servicioFactory.createServicio(
          servicioData.nombre,
          servicioData.descripcion,
          servicioData.costo,
          servicioData.extra
        );
        return servicio;
      })
    );
  }

}
