import { Food } from "./Food";


export class CartItem{

    //this is one way:
    /*constructor(food:Food){
        this.food=food;
    }
    */

    constructor (public food:Food){}
    
    quantity:number=1;
    price:number=this.food.price;

}