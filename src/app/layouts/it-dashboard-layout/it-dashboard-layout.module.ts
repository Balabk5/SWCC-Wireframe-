import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItDashboardLayoutRoutingModule } from './it-dashboard-layout-routing.module';
import { ItDashboardLayoutComponent } from './it-dashboard-layout.component';
import { ItDashboardSidebarComponent } from 'app/it-component/it-dashboard-sidebar/it-dashboard-sidebar.component';
import { ItComponentModule } from 'app/it-component/it-component.module';


@NgModule({
  declarations: [
    ItDashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    ItDashboardLayoutRoutingModule,
    ItComponentModule
  ]
})
export class ItDashboardLayoutModule { }
