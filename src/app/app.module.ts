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
<<<<<<< HEAD
import { FinanceRequestComponent } from './finance-request/finance-request.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
=======
import { JobrequestComponent } from './jobrequest/jobrequest.component';
import { HrNewRequestsComponent } from './hr-new-requests/hr-new-requests.component';
import { HrOnholdRequestsComponent } from './hr-onhold-requests/hr-onhold-requests.component';
import { HrCompletedRequestsComponent } from './hr-completed-requests/hr-completed-requests.component';
import { HrInprogressRequestsComponent } from './hr-inprogress-requests/hr-inprogress-requests.component';

>>>>>>> 10e3d9d0bcee0eddd50532de89e137c00ab00245
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ItComponent,
    FinanceComponent,
    ProcurementComponent,
<<<<<<< HEAD
    FinanceRequestComponent
=======
    JobrequestComponent,
    HrNewRequestsComponent,
    HrOnholdRequestsComponent,
    HrCompletedRequestsComponent,
    HrInprogressRequestsComponent,
>>>>>>> 10e3d9d0bcee0eddd50532de89e137c00ab00245

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
