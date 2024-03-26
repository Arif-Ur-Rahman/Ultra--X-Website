import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProjectComponent } from './project.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SingleBoardViewComponent } from './single-board-view/single-board-view.component';
import { SettingsComponent } from './settings/settings.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

const routes: Routes = [
  { path: '', redirectTo:'/tools/project/dashboard', pathMatch: 'full'},
  {
    path: '', component: ProjectComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'my-projects', component: MyProjectsComponent},
      {path: 'all-projects', component: AllProjectsComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'tutorials', component: TutorialsComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'single-board-view/:id', component: SingleBoardViewComponent},
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
