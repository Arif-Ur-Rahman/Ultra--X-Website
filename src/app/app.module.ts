import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

// * Module imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { WebsiteModule } from './website/website.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { FormsModule } from '@angular/forms';


import { CookieService } from 'ngx-cookie-service';
// import { NgxSpinnerModule } from "ngx-spinner";

// * MATERIAL IMPORTS
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    WebsiteModule,
    DragDropModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ScheduleModule,
    RecurrenceEditorModule,
    AngularFileUploaderModule,
    MatProgressSpinnerModule,
    // NgxSpinnerModule,

    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgMaterialModule,
    NgMultiSelectDropDownModule

  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService, CookieService],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
