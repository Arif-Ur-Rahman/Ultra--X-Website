import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceHistoryComponent } from './attendance-history/attendance-history.component';
import { AttendanceComponent } from './attendance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';

const routes: Routes = [
  { path: '', redirectTo:'my-attendance', pathMatch: 'full'},
  {
    path: '', component: AttendanceComponent,
    children:[
      { path: 'dashboard', component: DashboardComponent},
      { path: 'my-attendance', component: MyAttendanceComponent},
      { path: 'attendance-history', component: AttendanceHistoryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
