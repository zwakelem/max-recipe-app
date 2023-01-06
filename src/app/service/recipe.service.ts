import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('test recipe 1', 'general desc 1', 'assets/images/ijele.png'),
    new Recipe('test recipe 2', 'general desc 2', 'assets/images/mpisane.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
