import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { Recipe } from "src/app/model/recipe";
import { RecipeService } from "src/app/recipeBook/recipe.service";

@Injectable({
    providedIn:'root'
})
export class RecipeStorageService {
    constructor(private http:HttpClient,private recipeService:RecipeService){}
    storeRecepies(){
        const recipes=this.recipeService.getRecipes();
        return this.http.post('http://localhost:3000/posts',recipes)
        .subscribe((data)=>{
            console.log(data);
            
        })
    }


    fetchRecipes(){
        return this.http.get<Recipe[]>('http://localhost:3000/posts')
        .pipe(map(recipes=>{
            return recipes.map(recipe=>{
                return {
                    ...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]
                };
            });
        }),
        tap(recipes=>{
            this.recipeService.setRecipes(recipes)
        })
        
        )
      
    }

}