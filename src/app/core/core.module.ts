import { NgModule } from "@angular/core";
import { ShoppingListService } from "../shoppingList/shoppinglist.service";
import { AuthGuard } from "../auth-guard.service";
import { AuthService } from "../auth.service";
import { RecipeService } from "../recipeBook/recipe.service";
import { RecipeStorageService } from "src/Shared/recipe-storage.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@NgModule({
    providers:[
        ShoppingListService,
        AuthGuard,
        AuthService,
        RecipeService,
        RecipeStorageService,
        // {
        //     provide:HTTP_INTERCEPTORS,
        //     useClass:AuthInterceptorService,
        //     multi:true
        // }
    ]
})
export class CoreModule {}