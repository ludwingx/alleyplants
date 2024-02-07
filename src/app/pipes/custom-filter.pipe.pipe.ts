import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter',
  standalone: true
})
export class CustomFilterPipePipe implements PipeTransform {

  transform(data: any[], activeFilters: string[]): any[] {
    let result = [...data];

    if (activeFilters.includes('name')) {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (activeFilters.includes('species')) {
      result = result.sort((a, b) => a.species.localeCompare(b.species));
    }

    if (activeFilters.includes('price')) {
      result = result.sort((a, b) => a.id - b.id);
    }

    // Agrega más criterios de filtro según tus necesidades

    return result;
  }
}
