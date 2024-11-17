import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';


@Component({
  selector: 'app-select-button',
  standalone: true,
  imports: [SelectButtonModule,FormsModule],
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.css'
})
export class SelectButtonComponent {
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
