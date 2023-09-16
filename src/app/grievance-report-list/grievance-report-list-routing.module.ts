import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrievanceReportListPage } from './grievance-report-list.page';

const routes: Routes = [
  {
    path: '',
    component: GrievanceReportListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrievanceReportListPageRoutingModule {}
