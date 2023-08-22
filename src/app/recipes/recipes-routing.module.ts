import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from '../recipeBook/recipe/recipe.component';
import { RecipeEditComponent } from '../recipeBook/recipe-edit/recipe-edit.component';
import { RecipedetailComponent } from '../recipeBook/recipedetail/recipedetail.component';
import { RecipeStartComponent } from '../recipeBook/recipe-start/recipe-start.component';


const routes: Routes = [
  {
    path: '',
    component: RecipeComponent,
    children: [
      {
        path:'',component:RecipeStartComponent
      },

      {
        path: 'new',
        component: RecipeEditComponent,
      },
      {
        path: ':id',
        component: RecipedetailComponent,
        // ,resolve:[RecipeResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        // ,resolve:[RecipeResolverService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
