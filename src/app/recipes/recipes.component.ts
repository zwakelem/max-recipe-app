import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  activeRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}
  
  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.activeRecipe = recipe;
      }
    );
  }

}
