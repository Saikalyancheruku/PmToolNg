import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
@Component({
  selector: 'app-data-view-module',
  standalone: true,
  imports: [DataViewModule,FormsModule],
  templateUrl: './data-view-module.component.html',
  styleUrl: './data-view-module.component.css'
})
export class DataViewModuleComponent {
  @Input() data: any[] = []; // Data for the DataView
  @Input() layout: 'list' | 'grid' = 'list'; // Layout type
  @Input() paginator: boolean = false; // Show paginator
  @Input() rows: number = 10; // Rows per page
  @Input() sortField: string = ''; // Field to sort by
  @Input() sortOrder: number = 1; // Sort order (1 for ascending, -1 for descending)

  constructor() {}

  ngOnInit(): void {}

}
