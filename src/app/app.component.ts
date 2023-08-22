import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { UserService } from './user.service';
import { ShoppingListService } from './shoppingList/shoppinglist.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  // standalone:true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // imports:[RouterModule,HeaderComponent,HttpClientModule],

})
export class AppComponent implements OnInit{




  title = 'angular-demo';
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];
  count(counterValue: number) {
    if (counterValue % 2 == 0) {
      this.evenNumbers.push(counterValue);
    } else {
      this.oddNumbers.push(counterValue);
    }
  }


  numbers: number[] = [1, 2, 3, 4, 5];
  showEven: boolean = true;
  filteredNumbers:number[]=[];

toggleNumbers() {
  this.showEven = !this.showEven;
  this.filteredNumbers = this.numbers.filter(num =>
    this.showEven ? num % 2 === 0 : num % 2 !== 0
  );}


uname:string |null =null;
age:number | null =null;
  userData(name:string,age:number){
    this.uname=name;
    this.age=age;
    console.log(this.uname,this.age)
  }

// name:string |null =null;
// price:number | null =null;
// constructor(private fruitsService:AccountsService){}
// // Fruits:{name:string,price:number}[]=[];
// ngOnInit(): void {
//   // this.Fruits=this.fruitsService.Fruits;
//   this.fruitsService.getFruits();
// }
// addFruits(name:string,price:number){
//   this.fruitsService.addFruits(name,price)
//   this.fruitsService.getFruits()

// }
// add(name:string,price:number){
//   this.fruitsService.addingFruitsData(name,price);
//   this.fruitsService.getFruits();
// }



constructor(private shoppingService:ShoppingListService){}
ngOnInit(): void {
}






}