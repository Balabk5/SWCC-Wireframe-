import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-it-dashboard-onhold',
  templateUrl: './it-dashboard-onhold.component.html',
  styleUrls: ['./it-dashboard-onhold.component.scss']
})
export class ItDashboardOnholdComponent implements OnInit {
  data:{}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getItData()
    console.log(this.data)
  }

}

