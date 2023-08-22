import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/model/recipe';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.scss']
})
export class RecipeitemComponent {
@Input() p!:Recipe;
@Input() index!:number;

}
