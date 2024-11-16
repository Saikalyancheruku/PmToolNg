import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
@Component({
  selector: 'app-editor-component',
  standalone: true,
  imports: [EditorModule,FormsModule],
  templateUrl: './editor-component.component.html',
  styleUrl: './editor-component.component.css'
})
export class EditorComponent {
  @Input() text: any;
  @Output() valueChange = new EventEmitter<any>();
  @Input() readonly :boolean=true;
  onTextChanged(value: any): void {
    this.valueChange.emit(value); 
  }
  // customToolbar = [
  //   ['bold', 'italic', 'underline'],
  //   ['link', 'image'],
  //   ['orderedList', 'unorderedList'],
  //   ['alignLeft', 'alignCenter', 'alignRight']
  // ];
  


}
