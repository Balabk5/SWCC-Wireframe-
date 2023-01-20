import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as dummydata from '../assets/img/dummy.json';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data: {} = (dummydata as any).default;
  constructor() { 
    console.log((dummydata as any).default);
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
}
