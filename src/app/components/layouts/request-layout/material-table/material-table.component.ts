import { Component, OnInit } from "@angular/core";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, ViewChild } from "@angular/core";
import { MatSort, Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ApiService } from "app/api.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];

@Component({
  selector: "app-material-table",
  templateUrl: "./material-table.component.html",
  styleUrls: ["./material-table.component.scss"],
})
export class MaterialTableComponent implements AfterViewInit {
  data: any;
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource;


  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private apiservice: ApiService
  ) {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.apiservice.getHrdata())
    this.dataSource.sort = this.sort;
    // this.data = this.apiservice.getHrdata();
  }
  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce("Sorting cleared");
    }
  }
}
