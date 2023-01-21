import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-it-dashboard-new',
  templateUrl: './it-dashboard-new.component.html',
  styleUrls: ['./it-dashboard-new.component.scss']
})
export class ItDashboardNewComponent implements OnInit {

  data:{}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getItData()
  }

}

