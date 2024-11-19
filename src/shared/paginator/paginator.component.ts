import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [PaginatorModule,FormsModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  @Input() totalRecords: number = 0; // Total number of items
  @Input() rows: number = 10; // Number of items per page
  @Input() rowsPerPageOptions: number[] = [5, 10, 20]; // Rows per page options
  @Output() pageChange = new EventEmitter<any>(); // Event emitter for page change

  constructor() {}

  ngOnInit(): void {}

  handlePageChange(event: any): void {
    this.pageChange.emit(event); // Emit page change event
  }

}
