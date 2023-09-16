import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllShiftsPageRoutingModule } from './all-shifts-routing.module';

import { AllShiftsPage } from './all-shifts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllShiftsPageRoutingModule
  ],
  declarations: [AllShiftsPage]
})
export class AllShiftsPageModule {}
