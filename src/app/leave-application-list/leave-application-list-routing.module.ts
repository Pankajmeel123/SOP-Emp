import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveApplicationListPage } from './leave-application-list.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveApplicationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveApplicationListPageRoutingModule {}
