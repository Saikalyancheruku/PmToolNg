import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
@Component({
  selector: 'app-password',
  standalone: true,
  imports: [PasswordModule,FormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {

@Input() label: string = '';
@Input() value: any;
@Input() placeholder: string = '';
@Input() styleClass: string = '';
@Output() valueChange = new EventEmitter<string>();
@Input() disabled : boolean=false;
onValueChange(value: string) {
  this.valueChange.emit(value);
}
@Input() toggleMask : boolean=true;
}
