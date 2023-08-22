import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { Ingredients } from '../model/ingredient';
import { ShoppingListService } from '../shoppingList/shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}
  recipeChanged=new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'this is a simple recipe',
      'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',
      [new Ingredients('meat', 1), new Ingredients('dal', 2)]
    ),
    new Recipe(
      'biryani',
      'this is a Hyderabad biryani',
      'https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg',
      [new Ingredients('meat', 1), new Ingredients('spices', 2)]
    ),
  ];

// private recipes:Recipe[]=[];
setRecipes(recipes:Recipe[]){
  this.recipes=recipes;
  this.recipeChanged.next(this.recipes.slice());
}

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice())
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1)
    this.recipeChanged.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.shoppingListService.addingIngredients(ingredient);
  }
  getRecipeById(index: number) {
    return this.recipes.slice()[index];
  }
}
