import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollerModule } from 'primeng/scroller';
@Component({
  selector: 'app-scroller',
  standalone: true,
  imports: [ScrollerModule,FormsModule],
  templateUrl: './scroller.component.html',
  styleUrl: './scroller.component.css'
})
export class ScrollerComponent {
  @Input() items: any[] = []; // Data items to display
  @Input() itemSize: number = 50; // Height of each item in pixels
  @Input() lazyLoad: boolean = false; // Enable lazy loading
  @Output() onLazyLoad = new EventEmitter<any>(); // Emit event for loading more items

  loadMoreItems(event: any): void {
    this.onLazyLoad.emit(event); // Emit lazy load event
  }
}
