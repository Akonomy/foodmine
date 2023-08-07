import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/Food';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
    constructor() { }


addToCart(food:Food):void{
  //console.log("Addto cart() is running.");

  let cartItem = this.cart.items
  .find(item => item.food.id === food.id);
  if (cartItem)
  cartItem.quantity++;

  else{
  this.cart.items.push(new CartItem(food));
  }

  this.setCartToLocalStorage();

}


removeFromCart(foodId:string):void{
  this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
  this.setCartToLocalStorage();

}


changeQuantity(foodId:string , quantity:number){

  let cartItem =this.cart.items.find( item => item.food.id === foodId);
  if (!cartItem) return ;

  cartItem.quantity=quantity;
  cartItem.price= quantity * cartItem.food.price
  this.setCartToLocalStorage();
}



clearCart() {
  //console.log("clearCart() is running.");

  this.cart =new Cart();
  this.setCartToLocalStorage();
}


getCartObservable():Observable<Cart>{

return this.cartSubject.asObservable();


}


//now for local storage


private setCartToLocalStorage(): void {

  //console.log("setCartToLocalStorage() is running.");

  this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
  this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

  try {
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
}

private getCartFromLocalStorage(): Cart {

  const cartJson = localStorage.getItem("Cart");
  //console.log("getCartFromLocalStorage() is running. cartJson:", cartJson);

  try {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  } catch (error) {
    console.error('Error retrieving cart from localStorage:', error);
    return new Cart();
  }
}
























}