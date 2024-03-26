import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainCalendarComponent } from './components/main-calendar/main-calendar.component';
import { MainChatComponent } from './components/main-chat/main-chat.component';
import { MainEmailComponent } from './components/main-email/main-email.component';
import { MainProjectComponent } from './components/main-project/main-project.component';
import { MainToDOListComponent } from './components/main-to-dolist/main-to-dolist.component';
import { ToolsComponent } from './tools.component';

const routes: Routes = [
      { path: '', redirectTo:'/tools/main-to-do-list', pathMatch: 'full'},
  { 
    path: '', component: ToolsComponent,
    
    children:[
      { path: 'home', component: HomeComponent},
      { path: 'main-project', component: MainProjectComponent},
      { path: 'main-to-do-list', component: MainToDOListComponent},
      { path: 'main-calendar', component: MainCalendarComponent},
      { path: 'main-chat', component: MainChatComponent},
      { path: 'main-email', component: MainEmailComponent},


      { path: 'website-dashboard', loadChildren: () => import('./website-dashboard/website-dashboard.module').then(m => m.WebsiteDashboardModule) },
      { path: 'ToDo', loadChildren: () => import('./to-do/to-do.module').then(m => m.ToDoModule) },
      { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
      { path: 'idea', loadChildren: () => import('./idea/idea.module').then(m => m.IdeaModule) },
      { path: 'attendance', loadChildren: () => import('./attendance/attendance.module').then(m => m.AttendanceModule) },
      { path: 'asset', loadChildren: () => import('./asset/asset.module').then(m => m.AssetModule) },
      { path: 'whiteBoard', loadChildren: () => import('./white-board/white-board.module').then(m => m.WhiteBoardModule) },
      { path: 'leave', loadChildren: () => import('./leave/leave.module').then(m => m.LeaveModule) },
      { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
      { path: 'discussion', loadChildren: () => import('./discussion/discussion.module').then(m => m.DiscussionModule) },
      { path: 'project', loadChildren: () => import('./project/project.module').then(m => m.ProjectModule) },
      { path: 'health', loadChildren: () => import('./health/health.module').then(m => m.HealthModule) },
      { path: 'rules-regulations', loadChildren: () => import('./rules-regulations/rules-regulations.module').then(m => m.RulesRegulationsModule) },
      { path: 'employyeeEvaluation', loadChildren: () => import('./employee-evaluation/employee-evaluation.module').then(m => m.EmployeeEvaluationModule) },
    ]
  },
      
      
      
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsRoutingModule { }
