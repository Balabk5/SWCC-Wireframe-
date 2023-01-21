import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ItComponent } from './it/it.component';
import { FinanceComponent } from './finance/finance.component';
import { ProcurementComponent } from './procurement/procurement.component';
import { ItRequestComponent } from './it-request/it-request.component';
import { ItLayoutComponent } from './layouts/it-layout/it-layout.component';
import { ItComponentModule } from './it-component/it-component.module';
import { ItRequestListComponent } from './it-request-list/it-request-list.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ItComponentModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ItLayoutComponent,
    FinanceComponent,
    ProcurementComponent,
    ItRequestComponent,
    ItRequestListComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
