import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { JobPortalComponent } from './job-portal/job-portal.component';
import { NewsComponent } from './news/news.component';
import { NoticeComponent } from './notice/notice.component';
import { ProductComponent } from './product/product/product.component';
import { SeminarComponent } from './seminar/seminar.component';
import { WebsiteDashboardComponent } from './website-dashboard.component';

const routes: Routes = [
  // { path: '', component: WebsiteDashboardComponent }

  { path: '', redirectTo:'product', pathMatch: 'full' },


  {
    path:'', component:WebsiteDashboardComponent,

    children: [
      { path: 'home', component:HomeComponent},
      { path: 'product', component:ProductComponent},
      { path: 'seminar', component:SeminarComponent},
      { path: 'news', component:NewsComponent},
      { path: 'notice', component:NoticeComponent},
      { path: 'employee', component:EmployeeComponent},
      { path: 'jobportal', component:JobPortalComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteDashboardRoutingModule { }
