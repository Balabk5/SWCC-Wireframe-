import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
@Component({
  selector: 'app-hr-completed-requests',
  templateUrl: './hr-completed-requests.component.html',
  styleUrls: ['./hr-completed-requests.component.scss']
})
export class HrCompletedRequestsComponent implements OnInit {
  data:{}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getHrdata()
  }

}
