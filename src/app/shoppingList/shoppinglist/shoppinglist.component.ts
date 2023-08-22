import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/model/ingredient';
import { ShoppingListService } from '../shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss'],
}) 
export class ShoppinglistComponent implements OnInit,OnDestroy {
ingredient:Ingredients[]=[];

firstObserver!:Subscription

constructor(private shoppingListService:ShoppingListService){}
ngOnInit(): void {
  this.ingredient=this.shoppingListService.getIngredient();
  this.firstObserver=this.shoppingListService.ingredientsChanged.subscribe((ingredient:Ingredients[])=>{
    this.ingredient=ingredient
  })
}

ngOnDestroy(): void {
  this.firstObserver.unsubscribe();
}

onEditItem(id:number){
this.shoppingListService.startedEditing.next(id);
}





}
