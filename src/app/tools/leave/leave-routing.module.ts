import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../employee/dashboard/dashboard.component';
import { CasualLeaveComponent } from './casual-leave/casual-leave.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { LeaveComponent } from './leave.component';
import { SickLeaveComponent } from './sick-leave/sick-leave.component';

const routes: Routes = [
  { path: '', redirectTo:'sick-leave', pathMatch: 'full'},
  { 
    path: '', component: LeaveComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'sick-leave', component: SickLeaveComponent},
      {path: 'casual-leave', component: CasualLeaveComponent},
      {path: 'leave-history', component: LeaveHistoryComponent}
    ] 
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
