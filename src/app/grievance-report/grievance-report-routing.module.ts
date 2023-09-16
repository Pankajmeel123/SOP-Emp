import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrievanceReportPage } from './grievance-report.page';

const routes: Routes = [
  {
    path: '',
    component: GrievanceReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrievanceReportPageRoutingModule {}
