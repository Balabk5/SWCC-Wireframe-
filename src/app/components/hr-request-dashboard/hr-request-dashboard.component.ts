import { Component, OnInit } from '@angular/core';
import {ApiService} from 'app/api.service'
@Component({
  selector: 'app-hr-request-dashboard',
  templateUrl: './hr-request-dashboard.component.html',
  styleUrls: ['./hr-request-dashboard.component.scss']
})
export class HrRequestDashboardComponent implements OnInit {
  data:any;

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getHrdata()
  }

}
