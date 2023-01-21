import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcurementcreatereqComponent } from 'app/procurementcreatereq/procurementcreatereq.component';
import { ProcurementrequestlistComponent } from '../../procurementrequestlist/procurementrequestlist.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'procurementreqlist',
    pathMatch: 'full',
  },
  {path:'procurementreqlist', component:ProcurementrequestlistComponent},
  {path:'procurementcreatereq', component:ProcurementcreatereqComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementlayoutRoutingModule { }
