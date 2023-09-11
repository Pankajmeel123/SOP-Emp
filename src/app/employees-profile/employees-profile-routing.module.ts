import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesProfilePage } from './employees-profile.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesProfilePageRoutingModule {}
