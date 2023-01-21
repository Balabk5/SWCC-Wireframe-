import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
@Component({
  selector: 'app-hr-new-request',
  templateUrl: './hr-new-request.component.html',
  styleUrls: ['./hr-new-request.component.scss']
})
export class HrNewRequestComponent implements OnInit {
  
  data:{}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getHrdata()
  }

}
