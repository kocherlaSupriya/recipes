import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipelistComponent } from '../recipeBook/recipelist/recipelist.component';
import { RecipeitemComponent } from '../recipeBook/recipeitem/recipeitem.component';
import { RecipedetailComponent } from '../recipeBook/recipedetail/recipedetail.component';
import { RecipeComponent } from '../recipeBook/recipe/recipe.component';
import { RecipeStartComponent } from '../recipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipeBook/recipe-edit/recipe-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipeRoutingModule } from './recipes-routing.module';
import { SharedModule } from 'src/SharedModule/shared.module';



@NgModule({
  declarations: [
    RecipelistComponent,
    RecipeitemComponent,
    RecipedetailComponent,
    RecipeComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    SharedModule,
    RecipeRoutingModule
  ]
})
export class RecipesModule { }
