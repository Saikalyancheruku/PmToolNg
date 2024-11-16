import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-dropdown-component',
  standalone: true,
  imports: [DropdownModule],
  templateUrl: './dropdown-component.component.html',
  styleUrl: './dropdown-component.component.css'
})
export class DropdownComponentComponent {
  @Input() options: any[] = []; // Array to hold the options passed from parent
  @Input() selectedValue: any;  // To store the selected value
  @Output() valueChange = new EventEmitter<any>(); // Event to emit the selected value
  @Input() disabled :boolean=false;
  onSelect(value: any): void {
    this.valueChange.emit(value); // Emit selected value
  }

}
