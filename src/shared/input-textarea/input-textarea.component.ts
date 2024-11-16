import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [InputTextareaModule,FormsModule],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.css'
})
export class InputTextareaComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() styleClass: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() disabled : boolean=false;
  @Input() autoResize:boolean=true;
  onValueChange(value: string) {
    this.valueChange.emit(value);
  }
}
