import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrderListModule } from 'primeng/orderlist';
@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [OrderListModule,FormsModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  @Input() items: any[] = []; // Items to display in the order list
  @Input() dragDrop: boolean = false; // Enable/disable drag and drop
  @Input() listStyle: any = { height: '300px' }; // Style for the list container

  constructor() {}

  ngOnInit(): void {}
}
