import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveApplicationPageRoutingModule } from './leave-application-routing.module';

import { LeaveApplicationPage } from './leave-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveApplicationPageRoutingModule
  ],
  declarations: [LeaveApplicationPage]
})
export class LeaveApplicationPageModule {}
