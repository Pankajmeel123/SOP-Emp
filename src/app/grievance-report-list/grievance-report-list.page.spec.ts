import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrievanceReportListPage } from './grievance-report-list.page';

describe('GrievanceReportListPage', () => {
  let component: GrievanceReportListPage;
  let fixture: ComponentFixture<GrievanceReportListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GrievanceReportListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
