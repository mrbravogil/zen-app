import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  template: `
      <div class="flex flex-col items-center gap-5 ">
        <img src="/img/ensologo.png" class="w-40" alt="zen logo">
        <h1 class="text-6xl font-bold">FindYourZen</h1>
        <p class="text-lg font-semibold">Inspirational quotes for your everyday life.</p>
      </div>
  `,
  styleUrl: './header.css'
})
export class Header {

}
