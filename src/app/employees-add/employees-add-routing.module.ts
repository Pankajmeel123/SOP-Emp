import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesAddPage } from './employees-add.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeesAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesAddPageRoutingModule {}
