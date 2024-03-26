import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WebsiteComponent } from './website.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { TestComponent } from './test/test.component';

import { HeaderComponent } from './sharepages/header/header.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { LeftsidebarComponent } from './sharepages/leftsidebar/leftsidebar.component';
import { RightsidebarComponent } from './sharepages/rightsidebar/rightsidebar.component';


import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



// * MATERIAL IMPORTS
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


import { NewsComponent } from './pages/news/news.component';
import { SeminarComponent } from './pages/seminar/seminar.component';
import { CareerComponent } from './pages/career/career.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { MatButtonModule } from '@angular/material/button';
import { JobdetailsComponent } from './pages/jobdetails/jobdetails.component';
import { JobapplyformComponent } from './pages/jobapplyform/jobapplyform.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { SolutionInquiriesFormComponent } from './pages/solution-inquiries-form/solution-inquiries-form.component';
import { JobInquiresFormComponent } from './pages/job-inquires-form/job-inquires-form.component';



@NgModule({
  declarations: [
    WebsiteComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LeftsidebarComponent,
    RightsidebarComponent,
    ProductComponent,
    TestComponent,
    
    NewsComponent,
    SeminarComponent,
    CareerComponent,
    FeedbackComponent,
    JobdetailsComponent,
    JobapplyformComponent,
    ProductdetailsComponent,
    SolutionInquiriesFormComponent,
    JobInquiresFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,

    FormsModule,
    NgbModule
  ],

  bootstrap: [WebsiteComponent]
})
export class WebsiteModule { }
