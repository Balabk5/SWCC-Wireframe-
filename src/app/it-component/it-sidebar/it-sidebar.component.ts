import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/itreq/it-requests', title: 'Requests',  icon:'person', class: '' },
    { path: '/itreq/it-request-create', title: 'Create New Request',  icon:'content_paste', class: '' },

];


@Component({
  selector: 'app-it-sidebar',
  templateUrl: './it-sidebar.component.html',
  styleUrls: ['./it-sidebar.component.scss']
})
export class ItSidebarComponent implements OnInit {

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
