import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppinglistComponent } from '../shoppingList/shoppinglist/shoppinglist.component';
import { ShoppinglisteditComponent } from '../shoppingList/shoppinglistedit/shoppinglistedit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingRoutingModule } from './shoping-routing.module';
import { SharedModule } from 'src/SharedModule/shared.module';



@NgModule({
  declarations: [
    ShoppinglistComponent,
    ShoppinglisteditComponent,
  ],
  imports: [
   
    SharedModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingModule { }
