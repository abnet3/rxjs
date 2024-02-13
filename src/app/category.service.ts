import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private mainCategorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private subCategorySubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() { }

  // Method to update the selected main category
  updateMainCategory(mainCategory: string): void {
    this.mainCategorySubject.next(mainCategory);
  }

  // Method to get the selected main category as an observable
  getMainCategory(): Observable<string> {
    return this.mainCategorySubject.asObservable();
  }

  // Method to update the subcategories based on the selected main category
  updateSubCategories(subCategories: string[]): void {
    this.subCategorySubject.next(subCategories);
  }

  // Method to get the subcategories as an observable
  getSubCategories(): Observable<string[]> {
    return this.subCategorySubject.asObservable();
  }
}
