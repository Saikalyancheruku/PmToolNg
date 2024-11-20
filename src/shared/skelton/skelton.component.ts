import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CommonEngine } from '@angular/ssr';
import { SkeletonModule } from 'primeng/skeleton';
@Component({
  selector: 'app-skelton',
  standalone: true,
  imports: [SkeletonModule,CommonModule],
  templateUrl: './skelton.component.html',
  styleUrl: './skelton.component.css'
})
export class SkeltonComponent {
  @Input() shape: 'circle' | 'rectangle' = 'rectangle';  // Shape of the skeleton
  @Input() size: 'small' | 'medium' | 'large' = 'medium';  // Size of the skeleton
  @Input() width: string = '100%';  // Custom width
  @Input() height: string = '20px';  // Custom height
  @Input() animation: boolean = true;  // Whether animation is on or off
  skeletonClass: string = 'p-skeleton';

  ngOnInit() {
    // Set skeleton shape
    if (this.shape === 'circle') {
      this.skeletonClass += ' p-skeleton-circle';
    }

    // Set skeleton size
    if (this.size === 'small') {
      this.skeletonClass += ' p-skeleton-sm';
    } else if (this.size === 'large') {
      this.skeletonClass += ' p-skeleton-lg';
    }

    // Set animation (default is true)
    if (!this.animation) {
      this.skeletonClass += ' p-skeleton-no-animation';
    }
  }
}
