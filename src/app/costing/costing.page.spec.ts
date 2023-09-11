import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostingPage } from './costing.page';

describe('CostingPage', () => {
  let component: CostingPage;
  let fixture: ComponentFixture<CostingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CostingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
