import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },  {
    path: 'all-shifts',
    loadChildren: () => import('./all-shifts/all-shifts.module').then( m => m.AllShiftsPageModule)
  },
  {
    path: 'grievance-report',
    loadChildren: () => import('./grievance-report/grievance-report.module').then( m => m.GrievanceReportPageModule)
  },
  {
    path: 'leave-application',
    loadChildren: () => import('./leave-application/leave-application.module').then( m => m.LeaveApplicationPageModule)
  },
  {
    path: 'leave-application-list',
    loadChildren: () => import('./leave-application-list/leave-application-list.module').then( m => m.LeaveApplicationListPageModule)
  },
  {
    path: 'grievance-report-list',
    loadChildren: () => import('./grievance-report-list/grievance-report-list.module').then( m => m.GrievanceReportListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
