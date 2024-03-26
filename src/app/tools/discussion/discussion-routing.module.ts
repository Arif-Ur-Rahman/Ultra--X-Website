import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiscussionComponent } from './discussion.component';
import { GroupDiscussionComponent } from './group-discussion/group-discussion.component';
import { PublicDiscussionComponent } from './public-discussion/public-discussion.component';
import { SingleIssueDiscussionComponent } from './single-issue-discussion/single-issue-discussion.component';

const routes: Routes = [
  { path: '', redirectTo:'public-discussion', pathMatch: 'full'},
  {
    path: '', component: DiscussionComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'public-discussion', component: PublicDiscussionComponent},
      {path: 'gruop-discussion', component: GroupDiscussionComponent},
      {path: 'single-issue-discussion', component: SingleIssueDiscussionComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscussionRoutingModule { }
