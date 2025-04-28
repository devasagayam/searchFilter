import { Component } from '@angular/core';
import { SearchFilterData } from './components/search-filter/search-filter.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterData: SearchFilterData | null = null;

  handleFilterChange(data: SearchFilterData): void {
    this.filterData = data;
    console.log('Filter data received:', data);
  }
}