import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownDirective } from "src/directives/dropdown.directive";

@NgModule({
  declarations:[
    DropdownDirective
  ] ,
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    DropdownDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ] 
})

export class SharedModule {}