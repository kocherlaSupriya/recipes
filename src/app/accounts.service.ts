import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AccountsService {

Fruits=[
  { name:"apple",price:500},
  { name:"mango",price:100},
  { name:"grapes",price:600},
  { name:"kiwi",price:980},
] 
  constructor() { }

  getFruits(){
    console.log(this.Fruits)
  }

  addFruits(name:string,price:number){
this.Fruits.push({name,price})
  }
  addingFruitsData(name:string,price:number){
    this.Fruits.push({name,price})
  }

}
