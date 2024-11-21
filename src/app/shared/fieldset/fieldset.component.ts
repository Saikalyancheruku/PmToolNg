import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
@Component({
  selector: 'app-fieldset',
  standalone: true,
  imports: [FieldsetModule],
  templateUrl: './fieldset.component.html',
  styleUrl: './fieldset.component.css'
})
export class FieldsetComponent {
  @Input() legend: string = '';  // Fieldset legend (title)
  @Input() content: string = ''; // Content inside the fieldset
  @Output() fieldsetClick = new EventEmitter<string>(); // Output event when the fieldset is clicked

  onFieldsetClick() {
    this.fieldsetClick.emit(this.legend); // Emit event with legend as an example
  }
}
