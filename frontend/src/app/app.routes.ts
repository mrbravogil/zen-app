import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuoteComponent } from './pages/quote/quote.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quote/:categoryId', component: QuoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
