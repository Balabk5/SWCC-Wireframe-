import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/hr-request/requests', title: 'Requests',  icon:'person', class: '' },
    { path: '/hr-request/dashboard', title: 'Requests',  icon:'person', class: '' },
    { path: '/hr-request/jobrequest', title: 'Job Request',  icon:'money', class: '' },
    // { path: '/hrinprogress', title: 'In progress',  icon:'computer', class: '' },
    // { path: '/hrcompleted', title: 'Completed',  icon:'tick', class: '' },

];

@Component({
  selector: 'app-hr-req-sidebar',
  templateUrl: './hr-req-sidebar.component.html',
  styleUrls: ['./hr-req-sidebar.component.scss']
})
export class HrReqSidebarComponent implements OnInit {

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
