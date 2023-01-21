import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceCreateRequestComponent } from 'app/finance-create-request/finance-create-request.component';
import { FinancePreviousRequestComponent } from 'app/finance-previous-request/finance-previous-request.component';
import { FinanceRequestComponent } from 'app/finance-request/finance-request.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'finance-previous-request',
    pathMatch: 'full',
  },
  { path:'finance-previous-request', component:FinancePreviousRequestComponent },
    { path:'finance-create-request', component:FinanceCreateRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceReqLayoutRoutingModule { }
