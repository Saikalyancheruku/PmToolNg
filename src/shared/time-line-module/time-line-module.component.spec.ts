import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineModuleComponent } from './time-line-module.component';

describe('TimeLineModuleComponent', () => {
  let component: TimeLineModuleComponent;
  let fixture: ComponentFixture<TimeLineModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeLineModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeLineModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
