import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [RadioButtonModule,FormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() styleClass: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() disabled : boolean=false;
  onValueChange(value: string) {
    this.valueChange.emit(value);
  }
  @Input() inputId : string| undefined;
  @Input() readOnly :boolean=false;
}
