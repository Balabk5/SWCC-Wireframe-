import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HrRequestDashboardComponent } from './hr-request-dashboard/hr-request-dashboard.component';
import { RequestLayoutComponent } from './layouts/request-layout/request-layout.component';
import { HrReqSidebarComponent } from './layouts/hr-req-sidebar/hr-req-sidebar.component';
import { ApproverScreenComponent } from './approver-screen/approver-screen.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HrRequestDashboardComponent,
    RequestLayoutComponent,
    HrReqSidebarComponent,

    

    ApproverScreenComponent

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
