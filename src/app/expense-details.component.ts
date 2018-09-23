import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-expense-details",
  templateUrl: "./expense-details.component.html",
  styleUrls: ["./expense-details.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ExpenseDetailsComponent implements OnInit {
  @Input() expense: any;
  constructor() {}

  ngOnInit() {
    // this.expense = {
    //   id: "5b996064dfd5b783915112f5",
    //   amount: {
    //     value: "1854.99",
    //     currency: "EUR"
    //   },
    //   date: "2018-09-10T02:11:29.184Z",
    //   merchant: "KAGE",
    //   receipts: [],
    //   comment: "",
    //   category: "",
    //   user: {
    //     first: "Vickie",
    //     last: "Lee",
    //     email: "vickie.lee@pleo.io"
    //   }
    // };
  }
}
