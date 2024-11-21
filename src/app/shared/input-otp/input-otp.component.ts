import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
@Component({
  selector: 'app-input-otp',
  standalone: true,
  imports: [InputOtpModule,FormsModule],
  templateUrl: './input-otp.component.html',
  styleUrl: './input-otp.component.css'
})
export class InputOtpComponent {
  @Input() value: number | undefined ;
  @Output() valueChange = new EventEmitter<number>();
  onValueChange(value: number) {
    this.valueChange.emit(value);
  }
  @Input() length :number =4;
  
}
