import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchFilterData } from './search-filter.interface';
import { expandCollapse } from '../../animations';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  animations: [expandCollapse]
})
export class SearchFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<SearchFilterData>();
  
  filterForm: FormGroup;
  isExpanded = false;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      reportName: [''],
      email: ['', [Validators.email]],
      dateRange: this.fb.group({
        start: [null],
        end: [null]
      })
    });
  }

  ngOnInit(): void {
    // Initialize the form
  }

  toggleFilter(): void {
    this.isExpanded = !this.isExpanded;
  }

  onSubmit(): void {
    if (this.filterForm.valid) {
      const formValue = this.filterForm.value;
      
      const filterData: SearchFilterData = {
        reportName: formValue.reportName,
        email: formValue.email,
        startDate: formValue.dateRange?.start || null,
        endDate: formValue.dateRange?.end || null
      };
      
      this.filterChange.emit(filterData);
    }
  }

  clearFilters(): void {
    this.filterForm.reset();
    // Emit empty filter data
    this.filterChange.emit({
      reportName: '',
      email: '',
      startDate: null,
      endDate: null
    });
  }

  get emailControl() {
    return this.filterForm.get('email');
  }

  get hasActiveFilters(): boolean {
    const formValue = this.filterForm.value;
    return !!(
      formValue.reportName || 
      formValue.email || 
      formValue.dateRange?.start || 
      formValue.dateRange?.end
    );
  }
}