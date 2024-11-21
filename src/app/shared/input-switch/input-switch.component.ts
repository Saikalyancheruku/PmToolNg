import { Component, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-input-switch',
  standalone: true,
  imports: [InputSwitchModule,FormsModule],
  templateUrl: './input-switch.component.html',
  styleUrl: './input-switch.component.css'
})
export class InputSwitchComponent {
  @Input() checked :boolean=false;
  @Output() selected =new EventEmitter<any>();
  @Input() disabled :boolean=false;

  onSelect(selectedvalue :boolean){
    this.selected.emit(selectedvalue);
  }
  

}
