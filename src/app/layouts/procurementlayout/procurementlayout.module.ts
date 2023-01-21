import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurementlayoutRoutingModule } from './procurementlayout-routing.module';
import { ProcurementlayoutComponent } from './procurementlayout.component';
import { ProcurementComponentModule } from 'app/procurement-component/procurement-component.module';
// import { ProcurementSidebarComponent } from '../';

@NgModule({
  declarations: [
    ProcurementlayoutComponent,
    // ProcumentSidebarComponent
  ],
  imports: [
    CommonModule,
    ProcurementlayoutRoutingModule,
    ProcurementComponentModule
  ]
})
export class ProcurementlayoutModule { }
