import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrievanceReportPage } from './grievance-report.page';

describe('GrievanceReportPage', () => {
  let component: GrievanceReportPage;
  let fixture: ComponentFixture<GrievanceReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GrievanceReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
