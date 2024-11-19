import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [ConfirmDialogModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  @Input() title: string = '';  // Dialog title
  @Input() message: string = ''; // Dialog message
  @Input() position: string = 'center';  // Input for dialog position (default: 'center')

  @Output() confirm = new EventEmitter<boolean>();  // Output event when user confirms
  @Output() cancel = new EventEmitter<boolean>();   // Output event when user cancels
  @Input() visible : boolean =true;
  onConfirm() {
    this.confirm.emit(true);  // Emit true when user clicks confirm
  }

  onCancel() {
    this.cancel.emit(false);  // Emit false when user clicks cancel
  }
}
