import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
@Component({
  selector: 'app-hr-inprogress-requests',
  templateUrl: './hr-inprogress-requests.component.html',
  styleUrls: ['./hr-inprogress-requests.component.scss']
})
export class HrInprogressRequestsComponent implements OnInit {
  data:{}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getHrdata()
    console.log(this.data)
  }

}
