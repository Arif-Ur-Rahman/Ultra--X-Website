import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignedComponent } from './assigned/assigned.component';
import { DailyTaskComponent } from './daily-task/daily-task.component';
import { GroupTaskComponent } from './group-task/group-task.component';
import { HistoryComponent } from './history/history.component';

import { HomeComponent } from './home/home.component';
import { ImportantTaskComponent } from './important-task/important-task.component';
import { ProjectComponent } from './project/project.component';
import { ToDoComponent } from './to-do.component';

const routes: Routes = [
  {path: '', redirectTo:'daily-task', pathMatch: 'full'},

  { 
    path: '', component: ToDoComponent,
    
    children: [
      { path: 'dashboard', component:HomeComponent},
      { path: 'daily-task', component:DailyTaskComponent},
      { path: 'group-task', component:GroupTaskComponent},
      { path: 'important-task', component:ImportantTaskComponent},
      { path: 'project', component:ProjectComponent},
      { path: 'history', component:HistoryComponent},
      { path: 'assigned', component:AssignedComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoRoutingModule { }
