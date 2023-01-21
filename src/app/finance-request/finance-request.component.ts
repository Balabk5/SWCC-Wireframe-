import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-request',
  templateUrl: './finance-request.component.html',
  styleUrls: ['./finance-request.component.scss']
})
export class FinanceRequestComponent implements OnInit {
  first_name: string = '';

  designation: string = 'Procurement manager';

  invoiceno: string = '';

  amount: string = '';

  supplier_name: string = '';

  invoicedate : string = '';
  constructor() { }

  ngOnInit(): void {
  }
  setValue() {

    console.log('First Name: ',this.first_name);

    console.log('designation:',this.designation )

    console.log('invoiceno:',this.invoiceno )

    console.log('amount:',this.amount )

    console.log('supplier_name:',this.supplier_name )

    console.log('invoice_date:',this.invoicedate )

  }

}
