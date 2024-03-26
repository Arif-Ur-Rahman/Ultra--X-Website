import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IdeaDiscussionComponent } from './idea-discussion/idea-discussion.component';
import { IdeaPanelComponent } from './idea-panel/idea-panel.component';
import { IdeaComponent } from './idea.component';
import { MyIdeasComponent } from './my-ideas/my-ideas.component';

const routes: Routes = [
  { path: '', redirectTo: 'idea-panel', pathMatch: 'full' },
  {
    path: '', component: IdeaComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'idea-panel', component: IdeaPanelComponent },
      { path: 'my-ideas', component: MyIdeasComponent },
      { path: 'idea-discussion', component: IdeaDiscussionComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdeaRoutingModule { }
