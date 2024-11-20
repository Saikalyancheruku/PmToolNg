import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [FileUploadModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  @Input() multiple: boolean = false; // Allow multiple file uploads
  @Input() accept: string = '*'; // File types to accept
  @Input() maxFileSize: number = 0; // Maximum file size (in bytes), 0 for no limit
  @Input() styleClass: string = ''; // Custom style class for the file upload component
  @Input() auto: boolean = false; // Auto-upload files on select
  @Input() customUpload: boolean = false; // Use custom upload logic
  @Input() disabled: boolean = false; // Disable file upload

  @Output() uploadHandler = new EventEmitter<File[]>(); // Emits selected files on upload
  @Output() clearHandler = new EventEmitter<void>(); // Emits event when files are cleared

  onUpload(event: any) {
    const files = event.files;
    this.uploadHandler.emit(files);
  }

  onClear() {
    this.clearHandler.emit();
  }
}
