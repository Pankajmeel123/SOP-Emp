import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesAddPage } from './employees-add.page';

describe('EmployeesAddPage', () => {
  let component: EmployeesAddPage;
  let fixture: ComponentFixture<EmployeesAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EmployeesAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
