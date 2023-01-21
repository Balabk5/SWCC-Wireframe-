import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-approver-screen',
  templateUrl: './approver-screen.component.html',
  styleUrls: ['./approver-screen.component.scss']
})
export class ApproverScreenComponent implements OnInit {
  data:{}

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getHrdata()
    console.log(this.data);
   
  }

}
