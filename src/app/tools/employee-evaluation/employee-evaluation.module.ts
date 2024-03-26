import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeEvaluationRoutingModule } from './employee-evaluation-routing.module';
import { EmployeeEvaluationComponent } from './employee-evaluation.component';
import { HomeComponent } from './home/home.component';
import { InputEvaluationComponent } from './input-evaluation/input-evaluation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { ShowEvaluationComponent } from './show-evaluation/show-evaluation.component';

import {A11yModule} from '@angular/cdk/a11y';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';

import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
// import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import { SharedModule } from '../shared/shared.module';

import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    EmployeeEvaluationComponent,
    HomeComponent,
    InputEvaluationComponent,
    ShowEvaluationComponent
  ],
  imports: [
    CommonModule,
    EmployeeEvaluationRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    HttpClientModule,

     // * MATERIAL IMPORTS

     A11yModule,
     CdkAccordionModule,
     ClipboardModule,
     CdkStepperModule,
     CdkTableModule,
     CdkTreeModule,
     DragDropModule,
     MatAutocompleteModule,
     MatBadgeModule,
     MatBottomSheetModule,
     MatButtonToggleModule,
     MatChipsModule,
     MatStepperModule,
     MatDialogModule,
     MatDividerModule,
     MatExpansionModule,
     MatIconModule,
     MatListModule,
     MatMenuModule,
     MatNativeDateModule,
     MatPaginatorModule,
     MatProgressBarModule,
     MatProgressSpinnerModule,
     MatRippleModule,
     MatSidenavModule,
     MatSliderModule,
     MatSlideToggleModule,
     MatSnackBarModule,
     MatSortModule,
     MatTableModule,
     MatTabsModule,
     MatTooltipModule,
     MatTreeModule,
     OverlayModule,
     PortalModule,
     ScrollingModule,
  ]
})
export class EmployeeEvaluationModule { }
