import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
//import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:Food;
 // tags?:Tag[];


    
 
  constructor( activatedRoute:ActivatedRoute, foodService:FoodService , private cartService:CartService,
    private router:Router ){
    activatedRoute.params.subscribe((params) => {
      if (params.id)
      this.food =foodService.getAllFoodsById(params.id);

      //this.tags =foodService.getAllTags();
    })

  }

  ngOnInit():void{}

  addToCart(){

    this.cartService.addToCart(this.food);
    this.router.navigateByUrl("/cart-page")
  }

}



