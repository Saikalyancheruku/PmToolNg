import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [StepsModule],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css'
})
export class StepsComponent {
  @Input() stepsItems: MenuItem[] = []; // Array of step items
  @Input() activeIndex: number = 0; // Current active step index
  @Input() readonly: boolean = true; // If true, steps are not clickable
  @Input() styleClass: string = ''; // Custom CSS class for the steps

  @Output() stepChange = new EventEmitter<number>(); // Emits the active step index when changed
$index: number;

  onStepClick(event: any, index: number) {
    if (!this.readonly) {
      this.activeIndex = index;
      this.stepChange.emit(index);
    }
    event.preventDefault();
  }
}
