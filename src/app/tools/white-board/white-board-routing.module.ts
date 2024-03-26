import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatusBoardComponent } from './status-board/status-board.component';
import { WhiteBoardComponent } from './white-board.component';

const routes: Routes = [
  { path: '', redirectTo:'statusboard', pathMatch: 'full'},
  {
    path: '', component: WhiteBoardComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'statusboard', component: StatusBoardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhiteBoardRoutingModule { }
