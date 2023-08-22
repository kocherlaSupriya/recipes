import { Component } from '@angular/core';
import { RecipeStorageService } from 'src/Shared/recipe-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // standalone:true

})
export class HeaderComponent {
  constructor(private recipeStorageService: RecipeStorageService) {}
  onSaveData() {
    this.recipeStorageService.storeRecepies();
  }
  onFetchData() {
    this.recipeStorageService.fetchRecipes().subscribe();
  }
}
