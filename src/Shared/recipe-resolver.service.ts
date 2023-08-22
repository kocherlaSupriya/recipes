import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "src/app/model/recipe";
import { RecipeStorageService } from "./recipe-storage.service";
import { RecipeService } from "src/app/recipeBook/recipe.service";

@Injectable({
    providedIn:'root'
})
export class RecipeResolverService implements Resolve<Recipe[]> {

    constructor(
        private recipeService:RecipeService,
        private recipeStorageService:RecipeStorageService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    
        const recipes=this.recipeService.getRecipes();
        if(recipes.length===0){

            return this.recipeStorageService.fetchRecipes();
        }
        else{
            return recipes;
        }
}

}