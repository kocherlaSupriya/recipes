import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppingList/shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from './shoppingList/shoppinglistedit/shoppinglistedit.component';
import { RecipelistComponent } from './recipeBook/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipeBook/recipeitem/recipeitem.component';
import { RecipedetailComponent } from './recipeBook/recipedetail/recipedetail.component';
import { RecipeComponent } from './recipeBook/recipe/recipe.component';
import { CockpitComponent } from './servers/cockpit/cockpit.component';
import { ServerElementComponent } from './servers/server-element/server-element.component';
import { ServerComponent } from './servers/server/server.component';
import { OddComponent } from './assignment/odd/odd.component';
import { EvenComponent } from './assignment/even/even.component';
import { GamecontrolComponent } from './assignment/gamecontrol/gamecontrol.component';
import { BasicExampleDirective } from 'src/directives/basicExample.directive';
import { BetterexampleDirective } from '../directives/betterexample.directive';
import { DropdownDirective } from 'src/directives/dropdown.directive';
import { ActiveUsersComponent } from './assignment2/active-users/active-users.component';
import { InactiveUsersComponent } from './assignment2/inactive-users/inactive-users.component';
import { ShoppingListService } from './shoppingList/shoppinglist.service';
import { HomeComponent } from './assignment3/home/home.component';
import { ViewServerComponent } from './assignment3/servers/view-server/view-server.component';
import { EditServerComponent } from './assignment3/servers/edit-server/edit-server.component';
import { ViewUserComponent } from './assignment3/users/view-user/view-user.component';
import { UsersComponent } from './assignment3/users/users/users.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeStartComponent } from './recipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipeBook/recipe-edit/recipe-edit.component';
import { UserComponent } from './assignment4/user/user.component';
import { RecipeService } from './recipeBook/recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { RecipeStorageService } from 'src/Shared/recipe-storage.service';
import { AuthComponent } from './auth/auth/auth.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingModule } from './shopping/shopping.module';
import { SharedModule } from 'src/SharedModule/shared.module';
import { CoreModule } from './core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    BasicExampleDirective,
    AppComponent,
    HeaderComponent,
    CockpitComponent,
    ServerElementComponent,
    ServerComponent,
    OddComponent,
    EvenComponent,
    GamecontrolComponent,
    BetterexampleDirective,
    ActiveUsersComponent,
    InactiveUsersComponent,
    HomeComponent,
    ViewServerComponent,
    EditServerComponent,
    ViewUserComponent,
    UsersComponent,
    ErrorPageComponent,
    PageNotFoundComponent,
    UserComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RecipesModule,npm install @angular/service-worker --force
    // ShoppingModule,
    SharedModule,
    CoreModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
