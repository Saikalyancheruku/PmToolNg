import { Component, Input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@Component({
  selector: 'app-progress-spinner',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './progress-spinner.component.html',
  styleUrl: './progress-spinner.component.css'
})
export class ProgressSpinnerComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium'; // Size of the spinner
  @Input() strokeWidth: number = 4; // Stroke width for the spinner
  @Input() fill: boolean = false; // Whether to fill the spinner or not
  @Input() show: boolean = true; // Whether to show the spinner
  @Input() color: string = '#007bff'; // Custom spinner color

  spinnerClass: string = 'p-progress-spinner';
  
  ngOnInit() {
    // Customize the size of the spinner
    if (this.size === 'small') {
      this.spinnerClass += ' p-progress-spinner-sm';
    } else if (this.size === 'large') {
      this.spinnerClass += ' p-progress-spinner-lg';
    }
  }
}
