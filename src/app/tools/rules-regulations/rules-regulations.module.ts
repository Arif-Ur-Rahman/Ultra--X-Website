import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRegulationsRoutingModule } from './rules-regulations-routing.module';
import { RulesRegulationsComponent } from './rules-regulations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RulesRegulationsComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RulesRegulationsRoutingModule,
    SharedModule,
  ]
})
export class RulesRegulationsModule { }
