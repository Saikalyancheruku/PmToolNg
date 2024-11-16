import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calendar-component',
  standalone: true,
  imports: [CalendarModule,FormsModule],
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.css'
})
export class CalendarComponent {
  @Input() selectedDate: Date | null = null
  @Input() minDate: Date = new Date();
  @Input() dateFormat: string = 'yyyy-mm-dd';
  @Input() showIcon: boolean = true;
  @Input() showOnFocus: boolean = true;
  @Output() dateChange = new EventEmitter<Date>();
  @Input() timeOnly :boolean=false;
  @Input() disabled : boolean=false;
  @Input() readonlyInput : boolean=false;
  onDateSelect(date: Date): void {
    this.dateChange.emit(date);  
  }

}
