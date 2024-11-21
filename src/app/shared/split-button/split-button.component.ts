import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
@Component({
  selector: 'app-split-button',
  standalone: true,
  imports: [SplitButtonModule,FormsModule],
  templateUrl: './split-button.component.html',
  styleUrl: './split-button.component.css'
})
export class SplitButtonComponent {
  @Input() label: string = 'Select'; 
  @Input() icon: string = 'pi pi-check'; 
  @Input() styleClass: string = ''; 
  @Input() disabled:boolean=false;
  @Output() onClick = new EventEmitter<Event>(); 
  @Input() loading :boolean= false;
  @Input() menuItems:[]=[];
  @Output() defaultAction = new EventEmitter<void>(); 

  onDefaultClick() {
    this.defaultAction.emit(); 
  }
}
