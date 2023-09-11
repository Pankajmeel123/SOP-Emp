import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesProfilePage } from './employees-profile.page';

describe('EmployeesProfilePage', () => {
  let component: EmployeesProfilePage;
  let fixture: ComponentFixture<EmployeesProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmployeesProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
