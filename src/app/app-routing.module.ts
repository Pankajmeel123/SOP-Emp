import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'costing',
    loadChildren: () => import('./costing/costing.module').then( m => m.CostingPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'employees-add',
    loadChildren: () => import('./employees-add/employees-add.module').then( m => m.EmployeesAddPageModule)
  },
  {
    path: 'employees-profile',
    loadChildren: () => import('./employees-profile/employees-profile.module').then( m => m.EmployeesProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
