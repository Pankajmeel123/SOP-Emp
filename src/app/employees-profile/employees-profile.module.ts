import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeesProfilePageRoutingModule } from './employees-profile-routing.module';

import { EmployeesProfilePage } from './employees-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeesProfilePageRoutingModule
  ],
  declarations: [EmployeesProfilePage]
})
export class EmployeesProfilePageModule {}
