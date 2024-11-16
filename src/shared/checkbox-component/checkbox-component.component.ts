import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-checkbox-component',
  standalone: true,
  imports: [CheckboxModule,FormsModule],
  templateUrl: './checkbox-component.component.html',
  styleUrl: './checkbox-component.component.css'
})
export class CheckboxComponent {
  @Input() valueSelected :boolean=false;
  @Input() label :string | null= null;
  @Input() disabled : boolean=false;
  @Output() checkBoxChange = new EventEmitter<boolean>();
  onCBSelect(checked :boolean): void {
    this.checkBoxChange.emit(checked);  
  }
}
