import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://zen-app-rbj9.onrender.com/api/quotes';

  constructor(private http: HttpClient) { }

  getQuotes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getQuotesByCategory(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/category/${categoryId}`);
  }
}
