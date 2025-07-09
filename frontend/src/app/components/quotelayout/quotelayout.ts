import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../../services/quote.service';
;

@Component({
  selector: 'app-quotelayout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-wrap items-center justify-center gap-5 pt-20 text-white" *ngIf="quotes.length > 0">
    <div class="flex gap-5" *ngFor="let quote of quotes | slice:0:4; let i = index">
        <div (click)="onQuoteSelected(quote.id)"
             class="bg-flower bg-cover bg-center w-[32vw] lg:w-[13vw] h-[30vh] border-2 border-purple-950 p-4 rounded-3xl text-2xl italic relative">
          <p class="absolute top-5 left-5 pr-3">{{ quote.text }}</p>
        </div>

      </div>  
    </div>
  `,
  styleUrl: './quotelayout.css'
})

export class Quotelayout implements OnInit {
  quotes: any[] = [];

  constructor(
    private quoteService: QuoteService,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryId = Number(params.get('categoryId'));
      console.log('Nueva categoría:', categoryId);
      this.quoteService.getQuotesByCategory(categoryId).subscribe(data => {
        this.quotes = data;
        this.cdr.detectChanges();
      });
    });
  }

  getBackgroundClass(index: number): string {
    const classes = ['bg-flower', 'bg-forest', 'bg-zen', 'bg-sunset'];
    return classes[index % classes.length];
  }

  onQuoteSelected(quoteId: number) {
    console.log('Quote seleccionada ID:', quoteId);
  }
}