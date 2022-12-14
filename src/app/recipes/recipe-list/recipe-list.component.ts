import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('test recipe 1', 'general desc 1', 'assets/images/ijele.png'),
    new Recipe('test recipe 2', 'general desc 2', 'assets/images/mpisane.png')
  ];

  recipeSelected(recipeElement: Recipe) {
      this.selectedRecipe.emit(recipeElement);
  }

}
