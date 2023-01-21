import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcurementSidebarComponent } from './procurement-sidebar/procurement-sidebar.component';
import { RouterModule } from '@angular/router';
import { ProcurementNavbarComponent } from './procurement-navbar/procurement-navbar.component';



@NgModule({
  declarations: [
    ProcurementSidebarComponent,
    ProcurementNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ProcurementSidebarComponent,
    ProcurementNavbarComponent
  ]
})
export class ProcurementComponentModule { }
