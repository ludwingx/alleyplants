import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ApiPruebaService } from '../../services/api-prueba.service';
import { Character } from '../../interfaces/rickandmorty.interface';
import { CommonModule, NgClass } from '@angular/common';
import { CustomFilterPipePipe } from '../../pipes/custom-filter.pipe.pipe'

@Component({
  selector: 'app-best-deals',
  standalone: true,
  imports: [HttpClientModule, CommonModule, CustomFilterPipePipe, NgClass],
  templateUrl: './best-deals.component.html',
  styleUrl: './best-deals.component.scss'
})
export class BestDealsComponent {
  datos: Character [] = [];
  activeFilters: { [key: string]: boolean } = {
    name: false,
    species: false,
    price: false
  };
  lastIndex: number = 0;

  constructor(private apiPruebaService: ApiPruebaService) {}

  ngOnInit(): void {
    this.obtenerDatosDelServicio();
  }

  obtenerDatosDelServicio(): void {
    this.apiPruebaService.obtenerDatos().subscribe(
      (datos) => {
        this.datos = datos.results;

        console.log('Datos obtenidos:');
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  toggleFilter(filter: string): void {
    this.activeFilters[filter] = !this.activeFilters[filter];

  }

  getActiveFilters(): string[] {
    return Object.keys(this.activeFilters).filter((key) => this.activeFilters[key]);
  }
  isLast(index: number): boolean {
    return index === this.datos.length - 1;
  }
  showCard(index: number): boolean {
    // Aquí debes agregar la lógica que determina si mostrar o no la tarjeta en función del índice
    return index < 12; // Esto es solo un ejemplo, ajusta según tus necesidades
  }

}
