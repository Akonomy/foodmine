import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';
import { OrdersPageComponent } from './components/pages/orders-page/orders-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';

const routes: Routes = [

  //new object
  {path:"",component:HomeComponent},
  {path:"search/:searchTerm", component:HomeComponent},
  {path:"tag/:tag",component:HomeComponent},
  {path:"food/:id",component:FoodPageComponent},
  {path:"cart-page",component:CartPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'checkout', component: CheckoutPageComponent, canActivate:[AuthGuard]},
  {path:'payment-page', component: PaymentPageComponent, canActivate:[AuthGuard]},
  {path:'order/:orderId', component: OrderPageComponent, canActivate:[AuthGuard]},
  {path:'userOrders/:userId', component: OrdersPageComponent, canActivate:[AuthGuard]},
  {path:"profile",component: ProfilePageComponent,canActivate:[AuthGuard]},
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
