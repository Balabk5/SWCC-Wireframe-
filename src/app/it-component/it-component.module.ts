import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItSidebarComponent } from './it-sidebar/it-sidebar.component';
import { RouterModule } from '@angular/router';
import { ItNavbarComponent } from './it-navbar/it-navbar.component';



@NgModule({
  declarations: [
    ItSidebarComponent,
    ItNavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ItSidebarComponent,
    ItNavbarComponent
  ]
})
export class ItComponentModule { }
