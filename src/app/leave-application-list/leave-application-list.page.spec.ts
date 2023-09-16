import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveApplicationListPage } from './leave-application-list.page';

describe('LeaveApplicationListPage', () => {
  let component: LeaveApplicationListPage;
  let fixture: ComponentFixture<LeaveApplicationListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeaveApplicationListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
