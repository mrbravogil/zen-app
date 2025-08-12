import { Component } from '@angular/core';
import { Categorybuttons } from '../../components/categorybuttons/categorybuttons';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [Header,Categorybuttons],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
