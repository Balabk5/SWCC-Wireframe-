import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as dummydata from '../assets/img/dummy.json';
import * as itData from '../assets/img/itDummy.json';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: {} = (dummydata as any).default;
  itdata: {} = (itData as any).default;
  constructor() { 
    console.log((dummydata as any).default);
    console.log((itData as any).default);
  }
  getHrdata() {
    return this.data["hr"]
    // return 1;
  };
  getItData(){
    return this.data["it"]
  }
  getFinanceData() {
    // console.log(this.data["finance"])
    return this.data["finance"]
  }
  getProcurementData(){
    return this.data["procurement"]
  }
  getItRequestData(){
    return this.itdata["data"]
  }
  getFinanceReqData() {
    return this.data["finance-req"]
  }
  getProcurementReqData() {
    return this.data["procurement-req"]
  }
}
