import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './website/pages/about/about.component';
import { CareerComponent } from './website/pages/career/career.component';
import { ContactComponent } from './website/pages/contact/contact.component';
import { FeedbackComponent } from './website/pages/feedback/feedback.component';
import { HomeComponent } from './website/pages/home/home.component';
import { JobInquiresFormComponent } from './website/pages/job-inquires-form/job-inquires-form.component';
import { JobapplyformComponent } from './website/pages/jobapplyform/jobapplyform.component';
import { JobdetailsComponent } from './website/pages/jobdetails/jobdetails.component';
import { NewsComponent } from './website/pages/news/news.component';
import { ProductComponent } from './website/pages/product/product.component';
import { ProductdetailsComponent } from './website/pages/productdetails/productdetails.component';
import { SeminarComponent } from './website/pages/seminar/seminar.component';
import { SolutionInquiriesFormComponent } from './website/pages/solution-inquiries-form/solution-inquiries-form.component';

import { TestComponent } from './website/test/test.component';
import { WebsiteComponent } from './website/website.component';


// dashboard component inport



const routes: Routes = [

  {path: '', redirectTo:'website/home', pathMatch: 'full'},

  {
    path:'website', component:WebsiteComponent,

    children: [
  
      {path: 'home', component:HomeComponent},

      {path: 'contact', component:ContactComponent},
      {path: 'about', component:AboutComponent},
      {path: 'product', component:ProductComponent},
      {path: 'test', component:TestComponent},
      {path: 'news', component:NewsComponent},
      {path: 'seminar', component:SeminarComponent},
      {path: 'career', component:CareerComponent},
      {path: 'feedback', component:FeedbackComponent},
      {path: 'jobdetails', component:JobdetailsComponent},
      {path: 'applyform', component:JobapplyformComponent},
      {path: 'productdetails', component:ProductdetailsComponent},
      {path: 'solutionInquiry', component:SolutionInquiriesFormComponent},
      {path: 'jobInquiry', component:JobInquiresFormComponent}
    ]
  },

  { path: 'tools', loadChildren: () => import('./tools/tools.module').then(m => m.ToolsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
