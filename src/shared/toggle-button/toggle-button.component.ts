import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [ToggleButtonModule,FormsModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css'
})
export class ToggleButtonComponent {
  @Input() options: any[] = [];
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

}
