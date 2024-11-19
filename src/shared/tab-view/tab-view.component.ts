import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
@Component({
  selector: 'app-tab-view',
  standalone: true,
  imports: [TabViewModule],
  templateUrl: './tab-view.component.html',
  styleUrl: './tab-view.component.css'
})
export class TabViewComponent {
  @Input() tabs: { header: string, content: string, id :number}[] = [];  // Input for dynamic tabs
  @Output() tabSelected = new EventEmitter<number>();  // Output for tab selection event

  onTabSelect(tabHeader: number) {
    this.tabSelected.emit(tabHeader); // Emit the selected tab header to parent
  }
}
