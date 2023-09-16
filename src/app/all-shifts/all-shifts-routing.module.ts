import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllShiftsPage } from './all-shifts.page';

const routes: Routes = [
  {
    path: '',
    component: AllShiftsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllShiftsPageRoutingModule {}
