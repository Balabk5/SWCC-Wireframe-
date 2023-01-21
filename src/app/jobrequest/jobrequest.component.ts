import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-jobrequest",
  templateUrl: "./jobrequest.component.html",
  styleUrls: ["./jobrequest.component.scss"],
})
export class JobrequestComponent implements OnInit {
  searchValue: string = "";
  searchValue1: string = "";
  searchValue2: string = "";
  searchValue3: string = "";
  searchValue4: string = "";
  searchValue5: string = "";
  constructor() {}

  ngOnInit(): void {}
  clearSearch() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Have you filled all the details correctly ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Request Raised!",
            "Request has been sent to IT Team",
            "success"
          );
          this.searchValue = null;
          this.searchValue1 = null;
          this.searchValue2 = null;
          this.searchValue3 = null;
          this.searchValue4 = null;
          this.searchValue5 = null;

          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Fill correctly :)",
            "error"
          );
          
        }
      });

      
  }
}
