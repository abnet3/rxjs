import { CategoryService } from '../category.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-category',
  template: `
    <select (change)="onMainCategoryChange($event)">
      <option value="">Select Main Category</option>
      <option value="Category1">Category 1</option>
      <option value="Category2">Category 2</option>
      <option value="Category3">Category 3</option>
    </select>
  `,
})
export class MainCategoryComponent {
  constructor(private categoryService: CategoryService) {}

  onMainCategoryChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const mainCategory = target.value;
    this.categoryService.updateMainCategory(mainCategory);
  }
}
