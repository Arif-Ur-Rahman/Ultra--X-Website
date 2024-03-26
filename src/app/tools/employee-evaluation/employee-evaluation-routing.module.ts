import { ShowEvaluationComponent } from './show-evaluation/show-evaluation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeEvaluationComponent } from './employee-evaluation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = 
[ 
  { path: '', redirectTo:'home', pathMatch: 'full'},
  { 
    path: '', component: EmployeeEvaluationComponent,
    children:[
      {path: 'home', component:HomeComponent},
      {path: 'showEvaluation', component:ShowEvaluationComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeEvaluationRoutingModule { }
