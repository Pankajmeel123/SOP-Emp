import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeesAddPageRoutingModule } from './employees-add-routing.module';

import { EmployeesAddPage } from './employees-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeesAddPageRoutingModule
  ],
  declarations: [EmployeesAddPage]
})
export class EmployeesAddPageModule {}
