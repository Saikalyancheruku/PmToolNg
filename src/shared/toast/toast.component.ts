import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  @Input() key: string = ''; // Key to distinguish this toast
  @Input() styleClass: string = ''; // Custom CSS class
  @Input() position: string = 'top-right'; // Position of the toast
  @Input() life: number = 3000; // Duration of the toast in milliseconds
  @Input() closable: boolean = true; // Whether the toast is closable
  @Input() showIcon: boolean = true; // Whether to display icons
  @Input() baseZIndex: number = 0; // Base z-index for the toast

  constructor(private messageService: MessageService) {}

  // Method to add a new message to the toast
  showToast(severity: string, summary: string, detail: string) {
    this.messageService.add({
      key: this.key,
      severity,
      summary,
      detail,
      life: this.life,
    });
  }

  // Method to clear messages
  clearToast() {
    this.messageService.clear(this.key);
  }
}
