import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPruebaService {
  //apiGratis de plantas:
  // 
  private apiUrl = 'https://rickandmortyapi.com/api/character/?page=19';

  constructor(private http: HttpClient) {}

  // Función para obtener datos de la API
  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
