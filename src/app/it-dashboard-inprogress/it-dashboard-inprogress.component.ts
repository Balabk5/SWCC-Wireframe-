import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-it-dashboard-inprogress',
  templateUrl: './it-dashboard-inprogress.component.html',
  styleUrls: ['./it-dashboard-inprogress.component.scss']
})
export class ItDashboardInprogressComponent implements OnInit {

  data:{}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getItData()
    console.log(this.data)
  }

}
