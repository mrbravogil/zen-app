import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, Footer],
  templateUrl: './app.html',
})

export class App {
  protected title = 'zen-app-frontend';
}
