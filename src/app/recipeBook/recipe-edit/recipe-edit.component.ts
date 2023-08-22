import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipeService } from '../recipe.service';
import { Recipe } from 'src/app/model/recipe';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router:Router
    ) {
    }
  
  ngOnInit() {
    this.route.params
    .subscribe((paramId: Params) => {
      this.id = +paramId['id'];
      this.editMode = paramId['id'] != null;
      this.initialForm();
    });
  }
  onSubmit() {
    // let value=this.recipeForm.value;
    // const newRecipe=new Recipe(
    //   value.name,value.description,
    //   value.imagePath,value.ingredients)
    if(this.editMode){
this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value)
    }
    this.onCancel();
  }

  onDeleteIngredient(id:number){
(<FormArray>this.recipeForm.get('ingredients')).removeAt(id)
  }

  private initialForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
  //  let recipeIngredients= new FormArray([]);
   let recipeIngredients = new FormArray<any>([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.image;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
         recipeIngredients.push(
          new FormGroup({
        'name':new FormControl(ingredient.name,[Validators.required]),
        'amount':new FormControl(ingredient.amount,[Validators.required,
          Validators.pattern(/^[1-9]+[0-9]+$/)
        ])
         })
         );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName,[Validators.required]),
      'imagePath': new FormControl(recipeImagePath,[Validators.required]),
      'description': new FormControl(recipeDescription,[Validators.required]),
      'ingredients':recipeIngredients
    });
  }


  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,[Validators.required]),
        'amount':new FormControl( null,
          [Validators.required,
            Validators.pattern(/^[1-9]+[0-9]+$/)
          ]
          )
      })
    )
  }
  
  // get controls() {
  //   return (<FormArray>this.recipeForm.get('ingredients')).controls;
  // }
  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
 

  onCancel(){
this.router.navigate(['../'],{relativeTo:this.route})
  }
  
}
