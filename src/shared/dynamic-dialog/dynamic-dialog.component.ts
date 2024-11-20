import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ButtonComponent } from "../button-component/button-component.component";
@Component({
  selector: 'app-dynamic-dialog',
  standalone: true,
  imports: [DynamicDialogModule, ButtonComponent],
  templateUrl: './dynamic-dialog.component.html',
  styleUrl: './dynamic-dialog.component.css'
})
export class DynamicDialogComponent {
  @Input() title: string = 'Dynamic Dialog'; // Dialog title
  @Input() content: string = ''; // Dialog content or message
  @Input() position: string = 'center'; // Dialog position (e.g., top, center, etc.)
  @Input() visible: boolean = false; // Controls visibility of the dialog
  @Input() buttons: { label: string; action: string; icon?: string }[] = []; // Footer buttons

  @Output() close = new EventEmitter<void>(); // Emit when the dialog is closed
  @Output() action = new EventEmitter<string>(); // Emit custom actions from the dialog

  onClose() {
    this.close.emit(); // Emit close event
  }

  onAction(actionName: string) {
    this.action.emit(actionName); // Emit the action event with the action name
  }
  
}
