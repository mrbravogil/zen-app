import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent) 
  },
  { 
    path: 'quote/:categoryId', 
    loadComponent: () => 
      import('./pages/quote/quote.component').then(m => m.QuoteComponent) 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
