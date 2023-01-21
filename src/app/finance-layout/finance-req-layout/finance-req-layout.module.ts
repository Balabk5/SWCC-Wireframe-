import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceReqLayoutRoutingModule } from './finance-req-layout-routing.module';
import { FinanceRequestSidebarComponent } from 'app/finance-request-sidebar/finance-request-sidebar.component';


@NgModule({
  declarations: [
    // FinanceRequestSidebarComponent
  ],
  imports: [
    CommonModule,
    FinanceReqLayoutRoutingModule,

  ]
})
export class FinanceReqLayoutModule { }
