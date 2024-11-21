import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { OverlayModule } from 'primeng/overlay';
import { OverlayPanel } from 'primeng/overlaypanel';
@Component({
  selector: 'app-overlay-panel',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './overlay-panel.component.html',
  styleUrl: './overlay-panel.component.css'
})
export class OverlayPanelComponent {
  @Input() content: string = ''; // Content inside the overlay panel
  @Input() styleClass: string = ''; // Custom style classes
  @Input() appendTo: string = 'body'; // Where to append the panel in the DOM
  @Input() dismissable: boolean = true; // Close panel when clicking outside
  @Output() action = new EventEmitter<string>(); // Emit custom actions

  @ViewChild('op') overlayPanel!: OverlayPanel; // Reference to the overlay panel

  show(event: Event) {
    this.overlayPanel.toggle(event);
  }

  onAction(actionName: string) {
    this.action.emit(actionName); // Emit action event
    this.overlayPanel.hide(); // Close the overlay panel
  }
}
