import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [MultiSelectModule,FormsModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent {
  @Input() options: any[] = []; // Array to hold the options passed from parent
  @Input() selectedValue: any;  // To store the selected value
  @Output() valueChange = new EventEmitter<any>(); // Event to emit the selected value
  @Input() disabled :boolean=false;
  onSelect(value: any): void {
    this.valueChange.emit(value); // Emit selected value
  }
  @Input() readonly :boolean=false;
}
