import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonComponent } from "../button-component/button-component.component";
@Component({
  selector: 'app-confirm-popup',
  standalone: true,
  imports: [ConfirmPopupModule, FormsModule, ButtonComponent],
  templateUrl: './confirm-popup.component.html',
  styleUrl: './confirm-popup.component.css'
})
export class ConfirmPopupComponent {
  @Input() title: string = '';  // Dialog title
  @Input() message: string = ''; // Dialog message
  @Input() position: string = 'center';  // Input for dialog position (default: 'center')

  @Output() confirm = new EventEmitter<boolean>();  // Output event when user confirms
  @Output() cancel = new EventEmitter<boolean>();   // Output event when user cancels
  @Input() visible : boolean =true;
  onConfirm(value :any
  ) {
    this.confirm.emit(value);  // Emit true when user clicks confirm
  }
}
