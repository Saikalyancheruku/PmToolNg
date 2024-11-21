import { Component, Input } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.css'
})
export class BreadCrumbComponent {
  @Input() items: { label: string; url?: string }[] = []; 
  @Input() homeIcon: string = 'pi pi-home'; 
  @Input() homeUrl: string = '/';
}
