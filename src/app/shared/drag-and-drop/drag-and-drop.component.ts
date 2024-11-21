import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from 'primeng/dragdrop';
@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [DragDropModule,FormsModule,CommonModule],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.css'
})
export class DragAndDropComponent {
  @Input() availableItems: any[] = []; // Items available to drag
  @Input() dropZoneTitle: string = 'Drop Zone'; // Title for the drop zone
  @Input() draggableItemClass: string = 'p-2 border-round shadow-1'; // CSS class for draggable items
  @Input() droppableClass: string = 'p-2 border-1 surface-border border-round w-15rem'; // CSS class for the drop area

  @Output() onDragStart = new EventEmitter<any>(); // Emit when dragging starts
  @Output() onDragEnd = new EventEmitter<void>(); // Emit when dragging ends
  @Output() onDrop = new EventEmitter<any>(); // Emit when an item is dropped

  selectedItems: any[] = []; // Items dropped in the zone

  dragStart(item: any) {
    this.onDragStart.emit(item);
  }

  dragEnd() {
    this.onDragEnd.emit();
  }

  drop() {
    const item = this.availableItems.shift(); // Simulating item transfer
    if (item) {
      this.selectedItems.push(item);
      this.onDrop.emit(this.selectedItems);
    }
  }
}
