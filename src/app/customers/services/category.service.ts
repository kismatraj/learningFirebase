import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategory() {
    return this.http.get<Category>(
      'https://fir-lerning-b4927-default-rtdb.firebaseio.com/categories.json'
    );
  }
}
