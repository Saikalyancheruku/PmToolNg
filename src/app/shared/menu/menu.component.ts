import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() menuItems: MenuItem[] = []; // Array of menu items for the menu
  @Input() popup: boolean = false; // If true, the menu is displayed as a popup
  @Input() appendTo: string = 'body'; // Where the menu is appended in the DOM
  @Input() autoZIndex: boolean = true; 
  @Input() baseZIndex: number = 0;
  @Input() styleClass: string = ''; 

  @Output() itemClick = new EventEmitter<MenuItem>(); // Emits when a menu item is clicked

  onMenuItemClick(event: any) {
    this.itemClick.emit(event.item);
  }
}
