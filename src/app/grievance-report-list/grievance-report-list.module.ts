import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrievanceReportListPageRoutingModule } from './grievance-report-list-routing.module';

import { GrievanceReportListPage } from './grievance-report-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrievanceReportListPageRoutingModule
  ],
  declarations: [GrievanceReportListPage]
})
export class GrievanceReportListPageModule {}
