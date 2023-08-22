import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipeBook/recipe/recipe.component';
import { ShoppinglistComponent } from './shoppingList/shoppinglist/shoppinglist.component';
import { HomeComponent } from './assignment3/home/home.component';
import { ViewUserComponent } from './assignment3/users/view-user/view-user.component';
import { ViewServerComponent } from './assignment3/servers/view-server/view-server.component';
import { EditServerComponent } from './assignment3/servers/edit-server/edit-server.component';
import { UsersComponent } from './assignment3/users/users/users.component';
import { AuthGuard } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './header/header.component';
import { RecipedetailComponent } from './recipeBook/recipedetail/recipedetail.component';
import { RecipeStartComponent } from './recipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipeBook/recipe-edit/recipe-edit.component';
import { UserComponent } from './assignment4/user/user.component';
import { RecipeResolverService } from 'src/Shared/recipe-resolver.service';
import { AuthComponent } from './auth/auth/auth.component';

const routes: Routes = [
  //   {
  //     path:'',component:HomeComponent,pathMatch:'full'
  // },
  // {
  // path:'user/:id',component:UserComponent
  // },
  // {
  //   path: '',
  //   component: HomeComponent,pathMatch:'full'
  // },
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path:'recipes',
    loadChildren:()=>import('./recipes/recipes.module')
    .then(m=>m.RecipesModule)
  },
  {
    path:'shoppingList',
    loadChildren:()=>import('./shopping/shopping.module')
    .then(m=>m.ShoppingModule)
  },








  // {
  //   path: 'users',
  //   component: UsersComponent,
  //   loadComponent:()=>import('./assignment3/users/users/users.component').then(
  //     (m)=>m.UsersComponent
  //   )
  // },
  {
    path: 'users/:id',
    component: ViewUserComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'viewserver',
    // canActivate:[AuthGuard]
    canActivateChild: [AuthGuard],
    component: ViewServerComponent,
    children: [{ path: ':id/edit', component: EditServerComponent }],
  },
  // {
  //   // path:'not-found',component:PageNotFoundComponent
  //   path: 'not-found',
  //   component: ErrorPageComponent,
  //   data: { msg: 'not found any data' },
  // },
  // {
  //   path: '**',
  //   redirectTo: 'not-found',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {preloadingStrategy:PreloadAllModules}
    )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
