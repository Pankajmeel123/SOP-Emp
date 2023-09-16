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
      {
        path: 'all-shifts',
        loadChildren: () => import('../all-shifts/all-shifts.module').then( m => m.AllShiftsPageModule)
      },
      {
        path: 'grievance-report',
        loadChildren: () => import('../grievance-report/grievance-report.module').then( m => m.GrievanceReportPageModule)
      },
      {
        path: 'leave-application',
        loadChildren: () => import('../leave-application/leave-application.module').then( m => m.LeaveApplicationPageModule)
      },
      {
        path: 'leave-application-list',
        loadChildren: () => import('../leave-application-list/leave-application-list.module').then( m => m.LeaveApplicationListPageModule)
      },
      {
        path: 'grievance-report-list',
        loadChildren: () => import('../grievance-report-list/grievance-report-list.module').then( m => m.GrievanceReportListPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
