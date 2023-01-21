import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-hr-inprogress-requests',
  templateUrl: './hr-inprogress-requests.component.html',
  styleUrls: ['./hr-inprogress-requests.component.scss']
})
export class HrInprogressRequestsComponent implements OnInit {
  data:{}
  constructor(private apiservice:ApiService) { }

  ngOnInit(): void {
    this.data = this.apiservice.getHrdata()
    console.log(this.data)
  }
  success(){
    // Swal.fire("Success " ,'Request Accepected ','success');
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Accepect it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Accepeted!',
          'Request has been approved.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Requests are safe :)',
          'error'
        )
      }
    })
  }
  reject(){
    // Swal.fire("Success " ,'Request Accepected ','success');
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Accepect it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Rejected!',
          'Request has been Rejected.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Requests are safe :)',
          'error'
        )
      }
    })
  }
}
