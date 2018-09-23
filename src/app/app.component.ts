import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "expense manager";
  expenses = [
    {
      id: "5b996064dfd5b783915112f5",
      amount: {
        value: "1854.99",
        currency: "EUR"
      },
      date: "2018-09-10T02:11:29.184Z",
      merchant: "KAGE",
      receipts: [],
      comment: "",
      category: "",
      user: {
        first: "Vickie",
        last: "Lee",
        email: "vickie.lee@pleo.io"
      },
      index: 0
    },
    // {
    //   id: "123948985893",
    //   amount: {
    //     value: "1345.99",
    //     currency: "USD"
    //   },
    //   date: "2018-09-10T02:11:29.184Z",
    //   merchant: "apple",
    //   receipts: [],
    //   comment: "",
    //   category: "",
    //   user: {
    //     first: "todd",
    //     last: "Lee",
    //     email: "lol@pleo.io"
    //   },
    //   index: 1
    // }
  ];
}
