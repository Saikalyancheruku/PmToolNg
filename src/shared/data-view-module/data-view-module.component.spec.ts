import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewModuleComponent } from './data-view-module.component';

describe('DataViewModuleComponent', () => {
  let component: DataViewModuleComponent;
  let fixture: ComponentFixture<DataViewModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataViewModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataViewModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
