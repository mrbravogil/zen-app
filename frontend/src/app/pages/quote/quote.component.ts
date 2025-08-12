import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Navbar } from "../../components/navbar/navbar";
import { Quotelayout } from "../../components/quotelayout/quotelayout";

@Component({
  selector: 'app-quotes',
  imports: [Quotelayout, Navbar],
  templateUrl: './quotes.html',
})
export class QuoteComponent {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

}
