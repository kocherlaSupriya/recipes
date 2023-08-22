import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.scss']
})
export class RecipelistComponent implements OnInit,OnDestroy{
  recipes:Recipe[]=[];
subscription!:Subscription;
  constructor(private recipeService:RecipeService,
    private router:Router,
    private route:ActivatedRoute){}
ngOnInit(): void {
  this.subscription=this.recipeService.recipeChanged.subscribe(
    (recipes:Recipe[])=>{
this.recipes=recipes
    }
  )
  this.recipes=this.recipeService.getRecipes();
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
  
onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route})
}

}
