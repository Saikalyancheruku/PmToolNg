import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-component',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './button-component.component.html',
  styleUrl: './button-component.component.css'
})
export class ButtonComponent {
  @Input() label: string = 'Select'; 
  @Input() icon: string = 'pi pi-check'; 
  @Input() styleClass: string = ''; 
  @Input() disabled:boolean=false;
  @Output() onClick = new EventEmitter<Event>(); 
  @Input() loading :boolean= false

  
}
