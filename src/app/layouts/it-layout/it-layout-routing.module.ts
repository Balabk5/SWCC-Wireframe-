import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItRequestListComponent } from 'app/it-request-list/it-request-list.component';
import { ItRequestComponent } from 'app/it-request/it-request.component';

const routes: Routes = [
  {path:'it-requests',component:ItRequestListComponent},
  {path: 'it-request-create',component:ItRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItLayoutRoutingModule { }
