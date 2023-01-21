import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;  
}
export const ROUTES: RouteInfo[] = [
    { path: '/hr-approver/dashboard', title: 'HR Dashboard',  icon:'person', class: '' },
    { path: '/hr-approver/hrnewrequest', title: 'New Request',  icon:'person', class: '' },
    { path: '/hr-approver/hronholdrequest', title: 'On Hold',  icon:'money', class: '' },
    { path: '/hr-approver/hrinprogress', title: 'In progress',  icon:'computer', class: '' },
    { path: '/hr-approver/hrcompleted', title: 'Completed',  icon:'done', class: '' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
