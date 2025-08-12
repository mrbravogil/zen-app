import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categorybuttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./categorybuttons.html',

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
