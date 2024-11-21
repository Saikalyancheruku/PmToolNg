import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContextMenuComponent } from './dynamic-context-menu.component';

describe('DynamicContextMenuComponent', () => {
  let component: DynamicContextMenuComponent;
  let fixture: ComponentFixture<DynamicContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicContextMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
