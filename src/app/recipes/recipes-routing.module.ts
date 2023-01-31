import { RouterModule, Routes } from "@angular/router";
import { AuthGaurdService } from "../auth/auth-gaurd.service";
import { RecipeResolverService } from "../shared/recipe-resolver.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes.component";
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
      path: '',
      component: RecipesComponent,
      canActivate: [AuthGaurdService],
      children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent },
        {
          path: ':id',
          component: RecipeDetailComponent,
          resolve: [RecipeResolverService],
        },
        {
          path: ':id/edit',
          component: RecipeEditComponent,
          resolve: [RecipeResolverService],
        },
      ],
    },
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})  

export class RecipesRoutingModule {}