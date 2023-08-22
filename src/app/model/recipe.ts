// export interface Recipe{
//     name:string,
//     description:string,
//     image:string

import { Ingredients } from "./ingredient";

// }
export class Recipe{
    public name:string;
    public description:string;
    public image:string;
    public ingredients:Ingredients[]
    constructor(name:string,description:string,image:string,ingredients:Ingredients[]){
        this.name=name;
        this.description=description;
        this.image=image,
        this.ingredients=ingredients
    }
}