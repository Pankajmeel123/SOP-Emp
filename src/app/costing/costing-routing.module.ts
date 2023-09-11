import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostingPage } from './costing.page';

const routes: Routes = [
  {
    path: '',
    component: CostingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostingPageRoutingModule {}
