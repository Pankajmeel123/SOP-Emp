import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostingPageRoutingModule } from './costing-routing.module';

import { CostingPage } from './costing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostingPageRoutingModule
  ],
  declarations: [CostingPage]
})
export class CostingPageModule {}
