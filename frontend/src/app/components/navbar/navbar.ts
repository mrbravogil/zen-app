import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  template: `
  <nav class="w-full flex items-center gap-5 absolute left-0 top-0 py-10 pl-15 shadow-md hover:cursor-pointer hover:shadow-lg">
    <img src="/img/enso2.png" class="w-10 h-10" alt="">
    <p class="text-xl font-bold">FindYourZen</p>
  </nav>
  `,
  styleUrl: './navbar.css'
})
export class Navbar {

 
}

