import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { Ingredients } from 'src/app/model/ingredient';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.scss']
})
export class ShoppinglisteditComponent implements OnInit,OnDestroy {
  
constructor(private shoppingListService:ShoppingListService){}
   IngredientsList:Ingredients[]=[];
   editMode=false;
   editedItemIndex!:number;
   subscription!:Subscription;
  editedItem!:Ingredients;
  @ViewChild('recipeForm') form!:NgForm;

ngOnInit(): void {
 this.subscription= this.shoppingListService.startedEditing.subscribe(
  (index:number)=>{
this.editedItemIndex=index;
  this.editMode=true;
this.editedItem=this.shoppingListService.singleIngredient(index);
this.form.setValue({
  name:this.editedItem.name,
  amount:this.editedItem.amount
})

  })
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

  onSubmit(recipeForm:NgForm){
   let nameInput=recipeForm.value.name;
   let amountInput=recipeForm.value.amount;
   const newIngredient=new Ingredients(nameInput,amountInput);

if(this.editMode){
  this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient);
 }else{
  this.shoppingListService.addIngredients(newIngredient);
  
}
this.editMode=false;
this.form.reset()

  }
 


onDelete(){
  this.shoppingListService.deleteIngredient(this.editedItemIndex);
  this.onClear();
}

onClear(){
  this.form.reset();
  this.editMode=false;
}



}
