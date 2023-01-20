import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  
  recipesChangedSubscr: Subscription;
  recipes: Recipe[] ;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipesChangedSubscr = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipesChangedSubscr.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route})
  }

}
