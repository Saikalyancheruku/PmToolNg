import { Component, Input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.css'
})
export class TooltipComponent {
  @Input() text: string = ''; // Tooltip text
  @Input() position: string = 'top'; // Tooltip position (top, bottom, left, right)
  @Input() styleClass: string = ''; // Custom style class for tooltip
  @Input() tooltipDisabled: boolean = false; // Disable the tooltip
  @Input() showDelay: number = 0; // Delay before showing tooltip (in milliseconds)
  @Input() hideDelay: number = 0; // Delay before hiding tooltip (in milliseconds)
}
