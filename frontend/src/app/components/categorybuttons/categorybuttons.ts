import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categorybuttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-center gap-5 text-white" *ngIf="categories.length >= 4">
    <div class="flex flex-col gap-5">
    
    <button (click)="onCategorySelected(1)"
              class="bg-flower bg-cover bg-center w-[33vw] lg:w-[13vw] h-[25vh] border-2 border-purple-950 p-4 rounded-3xl text-2xl font-semibold italic hover:scale-105 hover:border-3 relative cursor-pointer">
        <p class="absolute top-5 left-5">{{ getCategoryNameById(1) }}</p>
      </button>

      <button (click)="onCategorySelected(2)"
              class="bg-forest bg-cover bg-center w-[33vw] lg:w-[13vw] h-[15vh] border-2 border-purple-950 p-4 rounded-3xl text-2xl font-semibold italic hover:scale-105 hover:border-3 relative cursor-pointer">
        <p class="absolute top-5 left-5">{{ getCategoryNameById(2) }}</p>
      </button>
      </div>  
      <div class="flex flex-col gap-5">
      <button (click)="onCategorySelected(3)"
              class="bg-zen bg-cover bg-center w-[33vw] lg:w-[13vw] h-[15vh] border-2 border-purple-950 p-4 rounded-3xl text-2xl font-semibold italic hover:scale-105 hover:border-3 relative cursor-pointer">
        <p class="absolute top-5 left-5">{{ getCategoryNameById(3) }}</p>
      </button>

      <button (click)="onCategorySelected(4)"
              class="bg-sunset bg-cover bg-center w-[33vw] lg:w-[13vw] h-[25vh] border-2 border-purple-950 p-4 rounded-3xl text-2xl font-semibold italic hover:scale-105 hover:border-3 relative cursor-pointer">
        <p class="absolute top-5 left-5 ">{{ getCategoryNameById(4) }}</p>
      </button>
      </div>  
    </div>
  `,
  styleUrls: ['./categorybuttons.css']
})
export class Categorybuttons implements OnInit {
  categories: any[] = [];

  constructor(private categoryService: CategoryService, private cdr: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      this.cdr.detectChanges();
    });
  }

  getCategoryNameById(id: number): string {
    const category = this.categories.find(cat => cat.id === id);
    return category ? category.name : 'Loading...';
  }

  onCategorySelected(categoryId: number) {
    console.log('Categoría seleccionada ID:', categoryId);
    this.goToCategory(categoryId);
  }

  goToCategory(categoryId: number) {
    this.router.navigate(['/quote', categoryId]);  // Navega con ID de categoría
}
}
