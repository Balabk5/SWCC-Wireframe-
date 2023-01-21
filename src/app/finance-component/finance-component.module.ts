import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceRequestSidebarComponent } from './finance-request-sidebar/finance-request-sidebar.component';
import { RouterModule } from '@angular/router';
import { FinanceRequestNavbarComponent } from './finance-request-navbar/finance-request-navbar.component';



@NgModule({
  declarations: [
    FinanceRequestSidebarComponent,
    FinanceRequestNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FinanceRequestSidebarComponent,
    FinanceRequestNavbarComponent
  ]
})
export class FinanceComponentModule { }
