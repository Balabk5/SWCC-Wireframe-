import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-procurementrequestlist',
  templateUrl: './procurementrequestlist.component.html',
  styleUrls: ['./procurementrequestlist.component.scss']
})
export class ProcurementrequestlistComponent implements OnInit {
  data:{}

  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getProcurementData()
    console.log(this.data);
  }

}
