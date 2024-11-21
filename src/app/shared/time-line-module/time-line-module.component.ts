import { Component, Input } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
@Component({
  selector: 'app-time-line-module',
  standalone: true,
  imports: [TimelineModule],
  templateUrl: './time-line-module.component.html',
  styleUrl: './time-line-module.component.css'
})
export class TimeLineModuleComponent {
  @Input() events: any[] = []; // Array of events
  @Input() align: string = 'left'; // 'left', 'right', 'alternate'
  @Input() layout: string = 'vertical'; // 'vertical' or 'horizontal'
  @Input() styleClass: string = ''; // Add custom styles
}
