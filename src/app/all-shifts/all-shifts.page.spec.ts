import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllShiftsPage } from './all-shifts.page';

describe('AllShiftsPage', () => {
  let component: AllShiftsPage;
  let fixture: ComponentFixture<AllShiftsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllShiftsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
