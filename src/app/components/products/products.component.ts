import { Component, OnInit } from '@angular/core';
import { ApiPruebaService } from '../../services/api-prueba.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  datos: any[] = [];

  constructor(private apiPruebaService: ApiPruebaService) {}

  ngOnInit(): void {
    this.obtenerDatosDelServicio();
  }

  obtenerDatosDelServicio(): void {
    this.apiPruebaService.obtenerDatos().subscribe(
      (datos) => {
        this.datos = datos;
        console.log('Datos obtenidos:', this.datos);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
