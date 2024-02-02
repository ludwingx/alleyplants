import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPruebaService {
  private apiUrl = 'https://api-nba-v1.p.rapidapi.com/seasons';

  constructor(private http: HttpClient) {}

  // Función para obtener datos de la API
  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
