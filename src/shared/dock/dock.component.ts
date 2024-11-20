import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [DockModule],
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css'
})
export class DockComponent {
  @Input() dockItems: MenuItem[] = []; // Array of dock menu items
  @Input() position: 'bottom' | 'top' | 'left' | 'right' = 'bottom';
 // Position of the dock ('top', 'bottom', 'left', 'right')
  @Input() styleClass: string = ''; // Custom CSS class for the dock
  @Input() autoZIndex: boolean = true; // Automatically handle z-index
  @Input() baseZIndex: number = 0; // Base z-index value

  @Output() itemClick = new EventEmitter<MenuItem>(); // Emit event when a dock item is clicked

  onDockItemClick(event: any) {
    this.itemClick.emit(event.item);
  }
}
