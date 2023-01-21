import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-hr-onhold-requests',
  templateUrl: './hr-onhold-requests.component.html',
  styleUrls: ['./hr-onhold-requests.component.scss']
})
export class HrOnholdRequestsComponent implements OnInit {
  data:{}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getHrdata()
    console.log(this.data)
  }

}
