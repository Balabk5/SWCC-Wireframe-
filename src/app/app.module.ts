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
import { JobrequestComponent } from './jobrequest/jobrequest.component';
import { HrNewRequestsComponent } from './hr-new-requests/hr-new-requests.component';
import { HrOnholdRequestsComponent } from './hr-onhold-requests/hr-onhold-requests.component';
import { InprogressRequestsComponent } from './inprogress-requests/inprogress-requests.component';
import { HrCompletedRequestsComponent } from './hr-completed-requests/hr-completed-requests.component';
import { HrInprogressRequestsComponent } from './hr-inprogress-requests/hr-inprogress-requests.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ItComponent,
    FinanceComponent,
    ProcurementComponent,
    JobrequestComponent,
    HrNewRequestsComponent,
    HrOnholdRequestsComponent,
    InprogressRequestsComponent,
    HrCompletedRequestsComponent,
    HrInprogressRequestsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
