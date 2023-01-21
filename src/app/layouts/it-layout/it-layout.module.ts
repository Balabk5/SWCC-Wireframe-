import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItLayoutRoutingModule } from './it-layout-routing.module';
import { ItLayoutComponent } from './it-layout.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ItLayoutRoutingModule,
  ]
})
export class ItLayoutModule { }
