import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgainizationChartComponent } from './orgainization-chart.component';

describe('OrgainizationChartComponent', () => {
  let component: OrgainizationChartComponent;
  let fixture: ComponentFixture<OrgainizationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgainizationChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgainizationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
