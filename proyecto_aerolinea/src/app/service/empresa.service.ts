import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/agrega-empresa'

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  empresa: Empresa | undefined

  private url = 'http://localhost:3001/empresa'

  constructor(private http: HttpClient) { }
  
  public getEmpresa(id:any): Observable <any>{
    return this.http.get<any>(this.url+id);  
  }

  public createEmpresa(empresa: Empresa){
    return this.http.post(this.url+'/new',empresa)
  }
}
