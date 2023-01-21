import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-procurementcreatereq',
  templateUrl: './procurementcreatereq.component.html',
  styleUrls: ['./procurementcreatereq.component.scss']
})
export class ProcurementcreatereqComponent implements OnInit {

  searchValue:String = ''
  searchValue1:String = 'eg., SWCC'
  searchValue2:String = 'eg., Standard'
  searchValue3:String = 'eg., Riyadh'
  searchValue4:String = 'eg., Mecca'
  searchValue5:String = 'eg., 90 - Standard'
  searchValue6:String = 'eg., 3000 SAR - Standard'
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
          'Request has been sent to Procurement&Supply Team',
          'success'
        )
        this.searchValue = null
        this.searchValue1 = 'eg., SWCC'
        this.searchValue2 = 'eg., Standard'
        this.searchValue3 = 'eg., Riyadh'
        this.searchValue4 = 'eg., Mecca'
        this.searchValue5 = 'eg., 90 - Standard'
        this.searchValue6 = 'eg., 3000 SAR - Standard'
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
