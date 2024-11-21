import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from '../button-component/button-component.component';
import { DropdownComponent } from '../dropdown-component/dropdown-component.component';
import { CalendarComponent } from '../calendar-component/calendar-component.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule,ButtonComponent,DropdownComponent,CalendarComponent,FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() data: any[] = []; // Table data
  @Input() columns: any[] = []; // Column definitions
  @Input() rowsPerPage: number = 10; // Default rows per page
  @Input() totalRecords: number = 0; // Total records (for pagination)
  @Input() loading: boolean = false; // Show loading spinner

  @Output() lazyLoad: EventEmitter<any> = new EventEmitter(); // Event when data needs to be loaded

  onLazyLoad(event: any) {
    // Emit lazy load event for parent to fetch data
    this.lazyLoad.emit(event);
  }

}
