import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/procurementreq/procurementreqlist', title: 'Requests',  icon:'content_paste', class: '' },
    { path: '/procurementreq/procurementcreatereq', title: 'Create New Request',  icon:'person', class: '' },
    

];
@Component({
  selector: 'app-procurement-sidebar',
  templateUrl: './procurement-sidebar.component.html',
  styleUrls: ['./procurement-sidebar.component.scss']
})
export class ProcurementSidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};

}
