import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-dropdown-component',
  standalone: true,
  imports: [DropdownModule,FormsModule],
  templateUrl: './dropdown-component.component.html',
  styleUrl: './dropdown-component.component.css'
})
export class DropdownComponent {
  @Input() options: any[] = []; // Array to hold the options passed from parent
  @Input() selectedValues: any;  // To store the selected value
  @Output() valueChange = new EventEmitter<any>(); // Event to emit the selected value
  @Input() disabled :boolean=false;
  @Input() optionLabel :string ='';
  onSelect(value: any): void {
    this.valueChange.emit(value); // Emit selected value
  }

}
