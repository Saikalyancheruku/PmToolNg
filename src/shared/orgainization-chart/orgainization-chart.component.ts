import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrganizationChartModule } from 'primeng/organizationchart';
@Component({
  selector: 'app-orgainization-chart',
  standalone: true,
  imports: [OrganizationChartModule,FormsModule],
  templateUrl: './orgainization-chart.component.html',
  styleUrl: './orgainization-chart.component.css'
})
export class OrgainizationChartComponent {
  @Input() nodes: any[] = []; // Hierarchical data for the chart
  @Input() selectionMode:  "single" | "multiple" | null | undefined; // Selection mode: 'single' or 'multiple'
  @Input() chartStyle: any = { minWidth: '400px' }; // Style for the chart container

}
