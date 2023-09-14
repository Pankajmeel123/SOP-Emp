import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
      },
      {
        path: 'attendance',
        loadChildren: () => import('../attendance/attendance.module').then( m => m.AttendancePageModule)
      },
      {
        path: 'costing',
        loadChildren: () => import('../costing/costing.module').then( m => m.CostingPageModule)
      },
      {
        path: 'employees-add',
        loadChildren: () => import('../employees-add/employees-add.module').then( m => m.EmployeesAddPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../employees-profile/employees-profile.module').then( m => m.EmployeesProfilePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
