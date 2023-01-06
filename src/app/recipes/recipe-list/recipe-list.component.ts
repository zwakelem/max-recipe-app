import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] ;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  recipeSelected(recipeElement: Recipe) {
      this.selectedRecipe.emit(recipeElement);
  }

}
