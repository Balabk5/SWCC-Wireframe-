import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/it-approver/dashboard', title: 'IT Dashboard',  icon:'person', class: '' },
    { path: '/it-approver/itnew', title: 'New Request',  icon:'person', class: '' },
    { path: '/it-approver/itonhold', title: 'On Hold',  icon:'money', class: '' },
    { path: '/it-approver/itinprogress', title: 'In progress',  icon:'computer', class: '' },
    { path: '/it-approver/itcomplete', title: 'Completed',  icon:'done', class: '' },

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
