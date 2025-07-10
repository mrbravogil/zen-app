import { Component } from '@angular/core';
import { Categorybuttons } from '../../components/categorybuttons/categorybuttons';
import { Footer } from "../../components/footer/footer";
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [Header,Categorybuttons, Footer],
  template: `
    <main class="bg-purple-100 w-screen h-screen flex items-center justify-center">
    <div class="bg-white w-[85%] md:w-[55%] lg:w-[35%] h-[90%] border border-purple-200 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-10 text-purple-950">
      <app-header/>
      <app-categorybuttons/>
      <app-footer/>
    </div>
</main>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
