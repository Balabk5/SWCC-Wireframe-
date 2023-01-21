import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItDashboardCompleteComponent } from 'app/it-dashboard-complete/it-dashboard-complete.component';
import { ItDashboardInprogressComponent } from 'app/it-dashboard-inprogress/it-dashboard-inprogress.component';
import { ItDashboardMainComponent } from 'app/it-dashboard-main/it-dashboard-main.component';
import { ItDashboardNewComponent } from 'app/it-dashboard-new/it-dashboard-new.component';
import { ItDashboardOnholdComponent } from 'app/it-dashboard-onhold/it-dashboard-onhold.component';

const routes: Routes = [
  {path:'itdashboard',component:ItDashboardMainComponent},
  {path: 'itonhold', component:ItDashboardOnholdComponent},
  {path: 'itinprogress', component: ItDashboardInprogressComponent},
  {path: 'itnew', component: ItDashboardNewComponent},
  {path: 'itcomplete', component: ItDashboardCompleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItDashboardLayoutRoutingModule { }
