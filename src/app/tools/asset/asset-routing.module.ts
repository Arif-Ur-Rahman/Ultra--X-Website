import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetComponent } from './asset.component';

import { AssignedComponent } from './assigned/assigned.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MyAssetsComponent } from './my-assets/my-assets.component';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  { path: '', redirectTo:'my-assets', pathMatch: 'full'},

  { 
    path: '', component: AssetComponent,
    
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'assigned', component: AssignedComponent},
      {path: 'inventory', component: InventoryComponent},
      {path: 'my-assets', component: MyAssetsComponent},
      {path: 'request', component: RequestComponent},
      {path: 'request-list', component: RequestListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }
