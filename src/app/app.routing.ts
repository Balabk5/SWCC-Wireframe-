import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ApproverScreenComponent } from './components/approver-screen/approver-screen.component';
import { FinanceReqLayoutComponent } from './finance-layout/finance-req-layout/finance-req-layout.component';
import { JobrequestComponent } from './jobrequest/jobrequest.component';
import { HrRequestDashboardComponent } from './components/hr-request-dashboard/hr-request-dashboard.component';
import { RequestLayoutComponent } from './components/layouts/request-layout/request-layout.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes =[
  
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'approver-screen',
    component: ApproverScreenComponent
    
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  
  
  {
    path: 'finance-req-dashboard',
    component: FinanceReqLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./finance-layout/finance-req-layout/finance-req-layout.module').then(m => m.FinanceReqLayoutModule)
    }]
  },
  {path:'hr-request',component:HrRequestDashboardComponent},
  {
    path: 'finance-req-dashboard',
    component: FinanceReqLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./finance-layout/finance-req-layout/finance-req-layout.module').then(m => m.FinanceReqLayoutModule)
    }]
  },
  {
    path:'hr-request',
    component:RequestLayoutComponent,
    children:[{
        path:'',
        loadChildren: ()=>import('./components/layouts/request-layout/request-layout.module').then(m=>m.RequestLayoutModule)
      }]
    
  }


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
