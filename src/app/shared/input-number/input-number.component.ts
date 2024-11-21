import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [InputNumberModule,FormsModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.css'
})
export class InputNumberComponent {
  @Input() label: string = '';
  @Input() value: number | undefined ;
  @Input() placeholder: string = '';
  @Input() styleClass: string = '';
  @Output() valueChange = new EventEmitter<number>();
  @Input() disabled : boolean=false;
  @Input() mode:string='decimal';
  @Input() currency : string='INR';
  @Input() currencyDisplay :boolean =false;
  @Input() inputId :string='integeronly';
  @Input() prefix :string ='';
  @Input() suffix : string ='';
  @Input() max : number | undefined;
  @Input() min : number | undefined;
  @Input() showButtons :boolean =false;
  onValueChange(value: number) {
    this.valueChange.emit(value);
  }
}
