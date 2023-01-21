import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
@Component({
  selector: 'app-finance-previous-request',
  templateUrl: './finance-previous-request.component.html',
  styleUrls: ['./finance-previous-request.component.scss']
})
export class FinancePreviousRequestComponent implements OnInit {
  data:{}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getFinanceData()
    console.log(this.data)
  }

}
