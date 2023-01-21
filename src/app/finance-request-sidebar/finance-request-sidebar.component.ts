import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'finance-create-request', title: 'Create Request',  icon:'money', class: '' },
    { path: 'finance-previous-request', title: 'Previous Request',  icon:'computer', class: '' },

];
@Component({
  selector: 'app-finance-request-sidebar',
  templateUrl: './finance-request-sidebar.component.html',
  styleUrls: ['./finance-request-sidebar.component.scss']
})
export class FinanceRequestSidebarComponent implements OnInit {
  menuItems: any[];
  constructor() { 
    console.log("working")
  }

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
