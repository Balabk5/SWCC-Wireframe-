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

import { FinanceRequestComponent } from './finance-request/finance-request.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { JobrequestComponent } from './jobrequest/jobrequest.component';
import { HrNewRequestsComponent } from './hr-new-requests/hr-new-requests.component';
import { HrOnholdRequestsComponent } from './hr-onhold-requests/hr-onhold-requests.component';
import { HrCompletedRequestsComponent } from './hr-completed-requests/hr-completed-requests.component';
import { HrInprogressRequestsComponent } from './hr-inprogress-requests/hr-inprogress-requests.component';
import { FinanceRequestSidebarComponent } from './finance-request-sidebar/finance-request-sidebar.component';
import { FinanceReqLayoutComponent } from './finance-layout/finance-req-layout/finance-req-layout.component';
import { FinanceOnholdRequestsComponent } from './finance-onhold-requests/finance-onhold-requests.component';
import { FinancePreviousRequestComponent } from './finance-previous-request/finance-previous-request.component';
import { FinanceCreateRequestComponent } from './finance-create-request/finance-create-request.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { HrNewRequestComponent } from './hr-new-request/hr-new-request.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

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

    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ItLayoutComponent,
    FinanceComponent,
    ProcurementComponent,
    ItRequestComponent,
    ItRequestListComponent,

    FinanceRequestComponent,

    JobrequestComponent,
    HrNewRequestsComponent,
    HrOnholdRequestsComponent,
    HrCompletedRequestsComponent,
    HrInprogressRequestsComponent,
    FinanceRequestSidebarComponent,
    FinanceReqLayoutComponent,
    FinanceOnholdRequestsComponent,
    FinancePreviousRequestComponent,
    FinanceCreateRequestComponent,

    HrNewRequestComponent,
      MainDashboardComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
