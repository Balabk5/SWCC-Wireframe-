import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';

@Component({
  selector: 'app-it-request-list',
  templateUrl: './it-request-list.component.html',
  styleUrls: ['./it-request-list.component.scss']
})
export class ItRequestListComponent implements OnInit {

  data: any;
  
  enteredSearchText:string="";
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.data = this.apiservice.getItRequestData();
    console.log(this.data)
  }

}
