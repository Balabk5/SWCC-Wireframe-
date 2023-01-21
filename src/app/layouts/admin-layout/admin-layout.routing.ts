import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { FinanceComponent } from 'app/finance/finance.component';
import { ItComponent } from 'app/it/it.component';
import { ProcurementComponent } from 'app/procurement/procurement.component';

import { ItRequestComponent } from 'app/it-request/it-request.component';

import { JobrequestComponent } from 'app/jobrequest/jobrequest.component';
import { HrOnholdRequestsComponent } from 'app/hr-onhold-requests/hr-onhold-requests.component';
import { HrInprogressRequestsComponent } from 'app/hr-inprogress-requests/hr-inprogress-requests.component';
import { HrCompletedRequestsComponent } from 'app/hr-completed-requests/hr-completed-requests.component';
import { HrNewRequestComponent } from 'app/hr-new-request/hr-new-request.component';



export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'finance', component:FinanceComponent },
    { path: 'it', component:ItComponent },
    { path:'procurement-supplychain', component:ProcurementComponent },

    { path:'it-request', component:ItRequestComponent }

    { path:'hronholdrequest', component:HrOnholdRequestsComponent },
    { path:'hrinprogress', component:HrInprogressRequestsComponent },
    { path:'hrcompleted', component:HrCompletedRequestsComponent },
    { path:'hrnewrequest', component:HrNewRequestComponent },

 
];
