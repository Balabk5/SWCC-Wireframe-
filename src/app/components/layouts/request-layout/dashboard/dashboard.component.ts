import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:any;


  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getHrdata()
  }

}
