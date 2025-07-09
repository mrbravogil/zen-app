import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";
import { Quotelayout } from "../../components/quotelayout/quotelayout";

@Component({
  selector: 'app-quotes',
  imports: [Quotelayout, Navbar, Footer],
  template: `
  
  <main class="bg-purple-100 w-screen h-screen flex items-center justify-center">
    <div class="bg-white w-[85%] lg:w-[35%] h-[90%] border border-purple-200 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-10 text-purple-950 relative">

  <app-navbar (click)="goHome()"/>
  <app-quotelayout/>
  <app-footer/>

  </div>
  </main>

  `,
  styleUrl: './quotes.css'
})
export class QuoteComponent {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

}
