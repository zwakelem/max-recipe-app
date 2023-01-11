import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from 'src/app/service/shopping-list.service';

import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', {static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor(private shoppingList: ShoppingListService) {}

  createIngredient() {
    console.log('%%%%%%');
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount = this.amountInput.nativeElement.value;
    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    console.log(ingredientName + ' ' + ingredientAmount);
    this.shoppingList.addIngredient(ingredient);
  }

}
