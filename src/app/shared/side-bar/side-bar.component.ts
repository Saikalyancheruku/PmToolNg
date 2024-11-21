import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [SidebarModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  @Input() visible: boolean = false; // Controls visibility of the sidebar
  @Input() position: string = 'left'; // Position of the sidebar (left, right, top, bottom)
  @Input() title: string = 'Sidebar'; // Title of the sidebar
  @Input() styleClass: string = ''; // Custom style class for the sidebar
  @Input() closeable: boolean = true; // Whether the sidebar can be closed
  @Input() content: string = ''; // Content to display inside the sidebar
  @Input() buttons: { label: string; action: string; icon?: string }[] = []; // Footer buttons

  @Output() close = new EventEmitter<void>(); // Emit when the sidebar is closed
  @Output() action = new EventEmitter<string>(); // Emit custom actions from the sidebar

  onClose() {
    this.close.emit(); // Emit close event
  }

  onAction(actionName: string) {
    this.action.emit(actionName); // Emit action event with action name
  }
}
