import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrievanceReportPageRoutingModule } from './grievance-report-routing.module';

import { GrievanceReportPage } from './grievance-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrievanceReportPageRoutingModule
  ],
  declarations: [GrievanceReportPage]
})
export class GrievanceReportPageModule {}
