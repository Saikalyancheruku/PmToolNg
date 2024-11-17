import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [RatingModule,FormsModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() styleClass: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() disabled : boolean=false;
  onValueChange(value: string) {
    this.valueChange.emit(value);
  }
  @Input() inputId : string| undefined;
  @Input() readOnly :boolean=false;

}
