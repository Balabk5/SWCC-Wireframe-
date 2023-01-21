import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/itreq-approver/itdashboard', title: 'IT Dashboard',  icon:'person', class: '' },
    { path: '/itreq-approver/itnew', title: 'New Request',  icon:'person', class: '' },
    { path: '/itreq-approver/itonhold', title: 'On Hold',  icon:'money', class: '' },
    { path: '/itreq-approver/itinprogress', title: 'In progress',  icon:'computer', class: '' },
    { path: '/itreq-approver/itcomplete', title: 'Completed',  icon:'tick', class: '' },

];

@Component({
  selector: 'app-it-dashboard-sidebar',
  templateUrl: './it-dashboard-sidebar.component.html',
  styleUrls: ['./it-dashboard-sidebar.component.scss']
})
export class ItDashboardSidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
