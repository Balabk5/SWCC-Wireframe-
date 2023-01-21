import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { ItRequestComponent } from './it-request/it-request.component';
import { ItLayoutComponent } from './layouts/it-layout/it-layout.component';

import { ApproverScreenComponent } from './components/approver-screen/approver-screen.component';
import { FinanceReqLayoutComponent } from './layouts/finance-req-layout/finance-req-layout.component';
import { JobrequestComponent } from './jobrequest/jobrequest.component';
import { HrRequestDashboardComponent } from './components/hr-request-dashboard/hr-request-dashboard.component';
import { RequestLayoutComponent } from './components/layouts/request-layout/request-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { ItDashboardLayoutComponent } from './layouts/it-dashboard-layout/it-dashboard-layout.component';
import { RequesthomepageComponent } from './requesthomepage/requesthomepage.component';
import { ServiceCatalogueComponent } from './service-catalogue/service-catalogue.component';
import { OveralldashboardComponent } from './overalldashboard/overalldashboard.component';
import { ProcurementlayoutComponent } from './layouts/procurementlayout/procurementlayout.component';


const routes: Routes =[
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'approver-screen',
    component: ApproverScreenComponent
    
  },
  {
    path: 'login',
    component: LoginPageComponent
    
  },
  {
    path: 'OverallDashboard',
    component: OveralldashboardComponent
    
  },    
  {
    path: 'home',
    component: HomepageComponent
    
  },
  {
    path: 'homepage',
    component: RequesthomepageComponent
    
  },
   {
    path: 'hr-approver',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },

  {
    path:'itreq',
    component:ItLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/it-layout/it-layout.module').then(m => m.ItLayoutModule)
    }]
  },
  {
    path: 'it-approver',
    component: ItDashboardLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/it-dashboard-layout/it-dashboard-layout.module').then(m => m.ItDashboardLayoutModule)
    }]
  },
  {
    path: 'financereq',
    component: FinanceReqLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/finance-req-layout/finance-req-layout.module').then(m => m.FinanceReqLayoutModule)
    }]
  },
  {
    path: 'procurementreq',
    component: ProcurementlayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/procurementlayout/procurementlayout.module').then(m => m.ProcurementlayoutModule)
    }]
  },
  // {
  //   path: 'itreq'
  // }

  
  
  {
    path: 'finance-req-dashboard',
    component: FinanceReqLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./finance-layout/finance-req-layout/finance-req-layout.module').then(m => m.FinanceReqLayoutModule)
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
  {
    path:'hr-request',
    component:RequestLayoutComponent,
    children:[{
        path:'',
        loadChildren: ()=>import('./components/layouts/request-layout/request-layout.module').then(m=>m.RequestLayoutModule)
      }]
    
  },
  {
    path: 'service-catalogue',
    component: ServiceCatalogueComponent
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
