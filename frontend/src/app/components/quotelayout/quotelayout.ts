import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuoteService } from '../../services/quote.service';
;

@Component({
  selector: 'app-quotelayout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotelayout.html',
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