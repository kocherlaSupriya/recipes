import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {
 recipe!:Recipe;
 id!:number;
constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router){}
addToShoppingList(){
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
// this.router.navigate(["/shoppingList"]);
}
ngOnInit(): void {
  this.route.params.subscribe((data)=>{
    this.id=+data['id'];
    this.recipe=this.recipeService.getRecipeById(this.id);
  })
}

onEditRecipe(){
  this.router.navigate(['edit'],{relativeTo:this.route})
}

onDelete(){
this.recipeService.deleteRecipe(this.id);
this.router.navigate(['/recipes']);
}

}
