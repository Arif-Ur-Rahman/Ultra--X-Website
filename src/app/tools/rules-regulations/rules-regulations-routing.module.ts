import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RulesRegulationsComponent } from './rules-regulations.component';

const routes: Routes = [
  { path: '', redirectTo:'dashboard', pathMatch: 'full'},
  { 
    path: '', component: RulesRegulationsComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'admin', component:AdminComponent}
    ] 
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRegulationsRoutingModule { }
