import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItSidebarComponent } from './it-sidebar/it-sidebar.component';
import { RouterModule } from '@angular/router';
import { ItNavbarComponent } from './it-navbar/it-navbar.component';
import { ItDashboardNavbarComponent } from './it-dashboard-navbar/it-dashboard-navbar.component';
import { ItDashboardSidebarComponent } from './it-dashboard-sidebar/it-dashboard-sidebar.component';



@NgModule({
  declarations: [
    ItSidebarComponent,
    ItNavbarComponent,
    ItDashboardNavbarComponent,
    ItDashboardSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ItSidebarComponent,
    ItNavbarComponent,
    ItDashboardNavbarComponent,
    ItDashboardSidebarComponent
  ]
})
export class ItComponentModule { }
