import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyReportComponent } from './daily-report/daily-report.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HealthHistoryComponent } from './health-history/health-history.component';
import { HealthComponent } from './health.component';

const routes: Routes = [
  { path: '', redirectTo:'daily-report', pathMatch: 'full'},
  { 
    path: '', component: HealthComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'daily-report', component: DailyReportComponent},
      {path: 'health-history', component: HealthHistoryComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HealthRoutingModule { }
