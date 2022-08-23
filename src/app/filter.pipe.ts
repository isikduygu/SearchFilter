import { Pipe, PipeTransform } from '@angular/core';
import { Movies } from './Movies';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(movie: Movies[], filterTerm: string) {
    if (movie.length == 0 || !filterTerm) {
      return movie;
    } else {
      let filteredItems = movie.filter((movie) => {
        return movie.Title.toLowerCase().startsWith(filterTerm)
      });
      return filteredItems;
    }
  }
}