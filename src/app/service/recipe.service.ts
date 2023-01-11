import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'test recipe 1', 
      'general desc 1', 
      'assets/images/ijele.png', 
      [new Ingredient('buns', 2), new Ingredient('meat', 1)]
      ),
    new Recipe(
      'test recipe 2', 
      'general desc 2', 
      'assets/images/mpisane.png', 
      [new Ingredient('apples', 2), new Ingredient('sauce', 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
