import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveApplicationListPageRoutingModule } from './leave-application-list-routing.module';

import { LeaveApplicationListPage } from './leave-application-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveApplicationListPageRoutingModule
  ],
  declarations: [LeaveApplicationListPage]
})
export class LeaveApplicationListPageModule {}
