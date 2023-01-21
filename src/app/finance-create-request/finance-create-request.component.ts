import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-finance-create-request',
  templateUrl: './finance-create-request.component.html',
  styleUrls: ['./finance-create-request.component.scss']
})
export class FinanceCreateRequestComponent implements OnInit {
  searchValue1:string = ''
  searchValue2:string = 'eg., Procurement Manager'
  searchValue3:string = ''
  searchValue4:string = ''
  searchValue5:string = ''
  searchValue6:string = ''
  searchValue7:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Have you filled all the details correctly ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Request Raised!',
          'Request has been sent to Finance Team',
          'success'
        )
          this.searchValue1 = null;
          this.searchValue2 = 'eg., Procurement Manager';
          this.searchValue3 = null;
          this.searchValue4 = null;
          this.searchValue5 = null;
          this.searchValue6 = null;
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Fill correctly :)',
          'error'
        )
      }
    })
  }

}
