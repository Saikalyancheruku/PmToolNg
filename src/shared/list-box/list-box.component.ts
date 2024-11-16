import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
@Component({
  selector: 'app-list-box',
  standalone: true,
  imports: [ListboxModule,FormsModule],
  templateUrl: './list-box.component.html',
  styleUrl: './list-box.component.css'
})
export class ListBoxComponent {
  @Input() options: any[] = [];
  @Input() value: any;  
  @Output() valueChange = new EventEmitter<any>(); 
  @Input() disabled :boolean=false;
  onValueSelected(value: any): void {
    this.valueChange.emit(value); 
  }
 
  @Input() filter : boolean=false;
}
