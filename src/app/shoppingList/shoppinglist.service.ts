import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../model/ingredient";
import { RecipeService } from "../recipeBook/recipe.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn:'root'
}
)
export class ShoppingListService {
  startedEditing=new Subject<number>();
    // constructor(private recipeService:RecipeService){}
    ingredientsChanged=new Subject<Ingredients[]>();
   private ingredient:Ingredients[]=[
        new Ingredients('apples',2)
      ]

deleteIngredient(id:number){
  this.ingredient.splice(id,1);
  this.ingredientsChanged.next(this.ingredient.slice())
}
      updateIngredient(index:number,newIngredient:Ingredients){
        this.ingredient[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredient.slice())  
      }
      getIngredient(){
        return this.ingredient.slice();
      }
      singleIngredient(index:number){
        return this.ingredient[index]
      }
      addIngredients(ingredient:Ingredients){
        this.ingredient.push(ingredient)
        this.ingredientsChanged.next(this.ingredient.slice())
      }
      addingIngredients(ingredient:Ingredients[]){
        this.ingredient.push(...ingredient);
        this.ingredientsChanged.next(this.ingredient.slice())
      }
}