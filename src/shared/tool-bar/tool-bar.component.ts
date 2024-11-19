import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonComponent } from "../button-component/button-component.component";
@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [ToolbarModule, ButtonComponent],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.css'
})
export class ToolBarComponent {
  @Input() toolbarItems: { label: string, icon: string, action: string }[] = []; // Input for dynamic toolbar items
  @Output() itemClicked = new EventEmitter<string>();  // Output for item click event

  onItemClick(action: string) {
    this.itemClicked.emit(action); // Emit the action of clicked item to parent
  }
}
