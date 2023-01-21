import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceReqLayoutRoutingModule } from './finance-req-layout-routing.module';
import { FinanceReqLayoutComponent } from './finance-req-layout.component';
import { FinanceComponentModule } from 'app/finance-component/finance-component.module';


@NgModule({
  declarations: [
    FinanceReqLayoutComponent
  ],
  imports: [
    CommonModule,
    FinanceReqLayoutRoutingModule,
    FinanceComponentModule
  ]
})
export class FinanceReqLayoutModule { }
