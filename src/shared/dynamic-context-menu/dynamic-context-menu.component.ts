import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContextMenuModule } from 'primeng/contextmenu';
@Component({
  selector: 'app-dynamic-context-menu',
  standalone: true,
  imports: [ContextMenuModule],
  templateUrl: './dynamic-context-menu.component.html',
  styleUrl: './dynamic-context-menu.component.css'
})
export class DynamicContextMenuComponent {
  @Input() menuItems: MenuItem[] = []; // Array of menu items for the context menu
  @Input() targetSelector: string = ''; // CSS selector of the target element
  @Input() styleClass: string = ''; // Custom style class for the context menu
  @Input() appendTo: string = 'body'; // Where the context menu should be appended
  @Input() autoZIndex: boolean = true; // Automatically manage z-index
  @Input() baseZIndex: number = 0; // Base z-index value

  @Output() itemClick = new EventEmitter<MenuItem>(); // Emits when a menu item is clicked

  onMenuItemClick(event: any) {
    this.itemClick.emit(event.item);
  }
}
