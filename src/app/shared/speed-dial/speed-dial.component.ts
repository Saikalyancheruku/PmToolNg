import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpeedDialModule } from 'primeng/speeddial';
@Component({
  selector: 'app-speed-dial',
  standalone: true,
  imports: [SpeedDialModule,FormsModule],
  templateUrl: './speed-dial.component.html',
  styleUrl: './speed-dial.component.css'
})
export class SpeedDialComponent {
  @Input() menuItems: [] = []; // Items for the SpeedDial
  @Input() direction: string = 'up'; // Direction in which the items appear (up, down, left, right)
  @Input() styleClass: string = ''; // Additional styling
  @Input() showIcon: string = 'pi pi-plus'; // Icon for the floating button
  @Input() hideIcon: string = 'pi pi-times'; // Icon when the menu is expanded
  @Input() radius: number = 100; // Radius of the circular menu
  @Input() type: string = 'linear'; // Type of SpeedDial (linear or circular)
}
