import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-category',
  template: `
    <select>
      <option value="">Select Subcategory</option>
      <option *ngFor="let subCategory of subCategories$ | async">{{ subCategory }}</option>
    </select>
  `,
})
export class SubCategoryComponent implements OnInit {
  subCategories$!: Observable<string[]>;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.subCategories$ = this.categoryService.getSubCategories();

    this.categoryService.getMainCategory().subscribe((mainCategory: string) => {
      const subCategories = this.fetchSubCategories(mainCategory);
      console.log(subCategories);
      this.categoryService.updateSubCategories(subCategories);
    });
  }

  fetchSubCategories(mainCategory: string): string[] {

    return ['Subcategory 1', 'Subcategory 2', 'Subcategory 3'];
  }
}
